const huggingFaceService = require('../services/huggingFaceService');
const errorHandler = require('../utils/errorHandler');

const generateImage = async (req, res) => {
  try {
    const data = req.body;
    if (!data || !data.inputs) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const imageBuffer = await huggingFaceService.queryHuggingFace(data);

    res.setHeader("Content-Type", "image/jpeg");
    res.send(Buffer.from(imageBuffer));
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = { generateImage };
