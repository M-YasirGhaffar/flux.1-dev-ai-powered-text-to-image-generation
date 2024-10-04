const rateLimit = require("express-rate-limit");

// Rate limiter for individual IP: max 10 requests per hour per user (IP)
const ipRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 10, // Max 10 requests per IP per hour
  message: "Too many requests from this IP, please try again after an hour.",
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip,
  skipFailedRequests: false,
});

// Global rate limiter: max 25 requests per hour total from all users
const globalRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 25, // Max 25 requests per hour for all users combined
  message: "Too many requests overall, please try again after an hour.",
  standardHeaders: true,
  legacyHeaders: false,
  skipFailedRequests: false,
});

module.exports = { ipRateLimiter, globalRateLimiter };
