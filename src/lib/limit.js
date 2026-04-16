import rateLimit from 'express-rate-limit';

// Global limiter: 100 requests per 15 minutes
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { status: false, message: 'Too many requests, please try again later.' }
});

// Strict limiter for auth routes: 10 per 15 minutes
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { status: false, message: 'Too many auth attempts, please try again later.' }
});

// Email OTP limiter: 5 per hour
export const emailVerificationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  keyGenerator: (req) => req.body.email,
  message: { status: false, message: 'Too many OTP requests. Try again in 1 hour.' }
});
