import admin from "firebase-admin";

// Initialize Firebase Admin (requires FIREBASE_ADMIN_JSON env var)
let firebaseApp: admin.app.App;

export function initializeFirebase() {
  try {
    const firebaseJson = process.env.FIREBASE_ADMIN_JSON;
    if (!firebaseJson) {
      console.warn("FIREBASE_ADMIN_JSON not set - phone auth will be disabled");
      return;
    }
    
    const serviceAccount = JSON.parse(firebaseJson);
    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  } catch (err) {
    console.error("Failed to initialize Firebase:", err);
  }
}

// Store OTP sessions in memory (for demo - use Redis in production)
const otpSessions: Record<string, { otp: string; phone: string; expiresAt: number }> = {};

/**
 * Send OTP to phone number
 */
export async function sendOTP(phone: string): Promise<string> {
  if (!firebaseApp) {
    throw new Error("Firebase not initialized");
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Store OTP (expires in 10 minutes)
  otpSessions[sessionId] = {
    otp,
    phone,
    expiresAt: Date.now() + 10 * 60 * 1000,
  };

  try {
    // In production, use Firebase SMS or a service like Twilio
    // For now, log the OTP (development only)
    console.log(`[DEV] OTP for ${phone}: ${otp} (Session: ${sessionId})`);

    // In real implementation, send via Firebase Phone Auth or SMS service
    // await admin.auth().sendSignInLinkToEmail(email, actionCodeSettings);
  } catch (err) {
    console.error("Failed to send OTP:", err);
    throw new Error("Failed to send OTP");
  }

  return sessionId;
}

/**
 * Verify OTP
 */
export async function verifyOTP(sessionId: string, otp: string): Promise<{ phone: string; valid: boolean }> {
  const session = otpSessions[sessionId];

  if (!session) {
    return { phone: "", valid: false };
  }

  // Check if expired
  if (Date.now() > session.expiresAt) {
    delete otpSessions[sessionId];
    return { phone: session.phone, valid: false };
  }

  // Check if OTP matches
  const isValid = session.otp === otp;

  if (isValid) {
    delete otpSessions[sessionId];
  }

  return { phone: session.phone, valid: isValid };
}

/**
 * Clean up expired OTP sessions (run periodically)
 */
export function cleanupExpiredOTPs() {
  const now = Date.now();
  for (const [sessionId, session] of Object.entries(otpSessions)) {
    if (now > session.expiresAt) {
      delete otpSessions[sessionId];
    }
  }
}

// Clean up expired OTPs every 5 minutes
setInterval(cleanupExpiredOTPs, 5 * 60 * 1000);
