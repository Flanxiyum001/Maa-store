import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Express } from "express";
import session from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import { User as SelectUser } from "@shared/schema";
import { initializeFirebase, sendOTP, verifyOTP } from "./phone-auth";
import { sendEmailOTP, verifyEmailOTP } from "./email-otp";

declare global {
  namespace Express {
    interface User extends SelectUser {}
  }
}

const scryptAsync = promisify(scrypt);

// Get list of allowed admin emails from environment variable
export function getAllowedAdminEmails(): string[] {
  const adminEmails = process.env.ADMIN_EMAILS || "";
  return adminEmails
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter((email) => email.length > 0);
}

// Check if email is allowed to be admin
export function isEmailAllowedForAdmin(email: string): boolean {
  const allowedEmails = getAllowedAdminEmails();
  if (allowedEmails.length === 0) {
    // If no emails are configured, only the first admin can be created
    return true;
  }
  return allowedEmails.includes(email.toLowerCase());
}

export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

export async function comparePasswords(supplied: string, stored: string) {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(hashedBuf, suppliedBuf);
}

export function setupAuth(app: Express) {
  // Initialize Firebase for phone auth
  initializeFirebase();

  const sessionSettings: session.SessionOptions = {
    secret: process.env.SESSION_SECRET || "maa-store-admin-secret-key-2024",
    resave: false,
    saveUninitialized: false,
    store: storage.sessionStore,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    }
  };

  app.set("trust proxy", 1);
  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await storage.getUserByUsername(username);
        if (!user || !(await comparePasswords(password, user.password))) {
          return done(null, false, { message: "Invalid username or password" });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }),
  );

  // Google OAuth Strategy
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: process.env.GOOGLE_CALLBACK_URL || "/api/auth/google/callback",
        },
        async (accessToken: any, refreshToken: any, profile: any, done: any) => {
          try {
            const email = profile.emails?.[0]?.value;
            const displayName = profile.displayName;
            
            if (!email) {
              return done(null, false, { message: "No email provided by Google" });
            }

            // Try to find user by email
            let user = await storage.getUserByEmail(email);
            
            if (!user) {
              // Create new user if doesn't exist
              // For Google OAuth users, mark both email and phone as verified to allow orders
              const username = profile.id; // Use Google ID as username
              user = await storage.createUser({
                username,
                password: await hashPassword(Math.random().toString(36)), // Random password for OAuth users
                email,
                emailVerified: true, // Auto-verify email for Google OAuth users
                isAdmin: false,
              });
            } else {
              // If user exists, ensure email is verified for Google OAuth users
              if (!user.emailVerified) {
                user = await storage.updateUser(user.id, { emailVerified: true });
              }
            }

            return done(null, user);
          } catch (err) {
            return done(err);
          }
        }
      )
    );
  }

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user || null);
    } catch (err) {
      done(err);
    }
  });

  // Register endpoint - NEVER allow isAdmin from request body for security
  app.post("/api/register", async (req, res, next) => {
    try {
      const existingUser = await storage.getUserByUsername(req.body.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const user = await storage.createUser({
        username: req.body.username,
        password: await hashPassword(req.body.password),
        email: req.body.email,
        isAdmin: false, // Always false - admin creation only via secure endpoint
      });

      req.login(user, (err) => {
        if (err) return next(err);
        const { password, ...safeUser } = user;
        res.status(201).json(safeUser);
      });
    } catch (err) {
      next(err);
    }
  });

  // Login endpoint
  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err: any, user: SelectUser | false, info: any) => {
      if (err) return next(err);
      if (!user) {
        return res.status(401).json({ message: info?.message || "Invalid credentials" });
      }
      req.login(user, (err) => {
        if (err) return next(err);
        const { password, ...safeUser } = user;
        res.status(200).json(safeUser);
      });
    })(req, res, next);
  });

  // Logout endpoint
  app.post("/api/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.sendStatus(200);
    });
  });

  // Get current user
  app.get("/api/user", (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const { password, ...safeUser } = req.user as SelectUser;
    res.json(safeUser);
  });

  // Get allowed admin emails (public endpoint for frontend)
  app.get("/api/admin/allowed-emails", (req, res) => {
    const allowedEmails = getAllowedAdminEmails();
    res.json({ 
      requiresWhitelist: allowedEmails.length > 0,
      allowedEmails: allowedEmails
    });
  });

  // ===== PHONE AUTHENTICATION ENDPOINTS =====

  // Register with phone number
  app.post("/api/phone-register", async (req, res, next) => {
    try {
      const { phone, password } = req.body;
      if (!phone || !password) {
        return res.status(400).json({ message: "Phone and password are required" });
      }

      const existingUser = await storage.getUserByPhone(phone);
      if (existingUser) {
        return res.status(400).json({ message: "Phone number already registered" });
      }

      // Create user with phone
      const user = await storage.createUser({
        username: `phone_${phone}`,
        password: await hashPassword(password),
        phone,
        phoneVerified: false,
        isAdmin: false,
      });

      const { password: _, ...safeUser } = user;
      res.status(201).json(safeUser);
    } catch (err) {
      next(err);
    }
  });

  // Send OTP to phone
  app.post("/api/phone/send-otp", async (req, res) => {
    try {
      const { phone } = req.body;
      if (!phone) {
        return res.status(400).json({ message: "Phone number is required" });
      }

      const sessionId = await sendOTP(phone);
      res.json({ sessionId, message: "OTP sent successfully" });
    } catch (err: any) {
      res.status(500).json({ message: err.message || "Failed to send OTP" });
    }
  });

  // Verify OTP
  app.post("/api/phone/verify-otp", async (req, res) => {
    try {
      const { sessionId, otp, password } = req.body;
      if (!sessionId || !otp) {
        return res.status(400).json({ message: "Session ID and OTP are required" });
      }

      const { phone, valid } = await verifyOTP(sessionId, otp);
      if (!valid) {
        return res.status(401).json({ message: "Invalid or expired OTP" });
      }

      // Find user by phone
      let user = await storage.getUserByPhone(phone);
      if (!user) {
        // Create new user if doesn't exist
        if (!password) {
          return res.status(400).json({ message: "Password required for new registration" });
        }
        user = await storage.createUser({
          username: `phone_${phone}`,
          password: await hashPassword(password),
          phone,
          phoneVerified: true,
          isAdmin: false,
        });
      } else {
        // Mark phone as verified
        user = await storage.updateUser(user.id, { phoneVerified: true });
      }

      if (!user) {
        return res.status(500).json({ message: "Failed to verify phone" });
      }

      // Auto-login after verification
      req.login(user, (err) => {
        if (err) return res.status(500).json({ message: "Login failed after verification" });
        const { password: _, ...safeUser } = user;
        res.json({ message: "Phone verified successfully", user: safeUser });
      });
    } catch (err: any) {
      res.status(500).json({ message: err.message || "Failed to verify OTP" });
    }
  });

  // Check phone verification status
  app.get("/api/phone/verification-status", requireAuth, (req, res) => {
    const user = req.user as SelectUser;
    res.json({ phoneVerified: user.phoneVerified, phone: user.phone });
  });

  // ===== EMAIL AUTHENTICATION ENDPOINTS =====

  // Send OTP to email
  app.post("/api/email/send-otp", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      const sessionId = await sendEmailOTP(email);
      res.json({ sessionId, message: "OTP sent to email successfully" });
    } catch (err: any) {
      res.status(500).json({ message: err.message || "Failed to send OTP" });
    }
  });

  // Verify email OTP
  app.post("/api/email/verify-otp", async (req, res) => {
    try {
      const { sessionId, otp, password } = req.body;
      if (!sessionId || !otp) {
        return res.status(400).json({ message: "Session ID and OTP are required" });
      }

      const { email, valid } = await verifyEmailOTP(sessionId, otp);
      if (!valid) {
        return res.status(401).json({ message: "Invalid or expired OTP" });
      }

      // Find user by email
      let user = await storage.getUserByEmail(email);
      if (!user) {
        // Create new user if doesn't exist
        if (!password) {
          return res.status(400).json({ message: "Password required for new registration" });
        }
        user = await storage.createUser({
          username: `email_${email.split("@")[0]}`,
          password: await hashPassword(password),
          email,
          emailVerified: true,
          isAdmin: false,
        });
      } else {
        // Mark email as verified
        user = await storage.updateUser(user.id, { emailVerified: true });
      }

      if (!user) {
        return res.status(500).json({ message: "Failed to verify email" });
      }

      // Auto-login after verification
      req.login(user, (err) => {
        if (err) return res.status(500).json({ message: "Login failed after verification" });
        const { password: _, ...safeUser } = user;
        res.json({ message: "Email verified successfully", user: safeUser });
      });
    } catch (err: any) {
      res.status(500).json({ message: err.message || "Failed to verify OTP" });
    }
  });

  // Check email verification status
  app.get("/api/email/verification-status", requireAuth, (req, res) => {
    const user = req.user as SelectUser;
    res.json({ emailVerified: user.emailVerified, email: user.email });
  });
}

// Middleware to check if user is authenticated
export function requireAuth(req: any, res: any, next: any) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

// Middleware to check if user is admin
export function requireAdmin(req: any, res: any, next: any) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  if (!(req.user as SelectUser).isAdmin) {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
}
