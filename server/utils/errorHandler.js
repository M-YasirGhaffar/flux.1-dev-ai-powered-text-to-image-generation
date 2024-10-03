const errorHandler = (res, error) => {
    console.error("Error processing request:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  };
  
  module.exports = errorHandler;
  