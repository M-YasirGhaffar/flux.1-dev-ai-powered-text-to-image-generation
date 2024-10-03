const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config/config");
const imageRoutes = require("./routes/imageRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());

app.use("/api", imageRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log("Shutting down gracefully...");
  process.exit(0);
});

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
