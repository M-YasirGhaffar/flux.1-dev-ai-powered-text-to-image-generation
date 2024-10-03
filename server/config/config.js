require('dotenv').config();

const config = {
  port: process.env.PORT || 8000,
  huggingFaceApiKey: process.env.HUGGING_FACE_API_KEY
};

module.exports = config;