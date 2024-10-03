const express = require("express");
const { generateImage } = require("../controllers/imageController");
const { ipRateLimiter, globalRateLimiter } = require("../middlewares/rateLimiters");

const router = express.Router();

router.post("/generate-image", ipRateLimiter, globalRateLimiter, generateImage);

module.exports = router;
