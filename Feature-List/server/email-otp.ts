// Email OTP service - generates and validates OTP for email verification

// Store OTP sessions in memory (for demo - use Redis in production)
const emailOtpSessions: Record<string, { otp: string; email: string; expiresAt: number }> = {};

/**
 * Send OTP to email address
 */
export async function sendEmailOTP(email: string): Promise<string> {
  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const sessionId = `email_session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Store OTP (expires in 10 minutes)
  emailOtpSessions[sessionId] = {
    otp,
    email,
    expiresAt: Date.now() + 10 * 60 * 1000,
  };

  try {
    // In development, log the OTP
    console.log(`[DEV] Email OTP for ${email}: ${otp} (Session: ${sessionId})`);

    // In production, send via email service (SendGrid, Resend, etc.)
    // await sendEmailViaService(email, otp);
  } catch (err) {
    console.error("Failed to send email OTP:", err);
    throw new Error("Failed to send OTP");
  }

  return sessionId;
}

/**
 * Verify email OTP
 */
export async function verifyEmailOTP(sessionId: string, otp: string): Promise<{ email: string; valid: boolean }> {
  const session = emailOtpSessions[sessionId];

  if (!session) {
    return { email: "", valid: false };
  }

  // Check if expired
  if (Date.now() > session.expiresAt) {
    delete emailOtpSessions[sessionId];
    return { email: session.email, valid: false };
  }

  // Check if OTP matches
  const isValid = session.otp === otp;

  if (isValid) {
    delete emailOtpSessions[sessionId];
  }

  return { email: session.email, valid: isValid };
}

/**
 * Clean up expired OTP sessions (run periodically)
 */
export function cleanupExpiredEmailOTPs() {
  const now = Date.now();
  for (const [sessionId, session] of Object.entries(emailOtpSessions)) {
    if (now > session.expiresAt) {
      delete emailOtpSessions[sessionId];
    }
  }
}

// Clean up expired OTPs every 5 minutes
setInterval(cleanupExpiredEmailOTPs, 5 * 60 * 1000);
