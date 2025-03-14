const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Root route to prevent "Cannot GET /" error
app.get("/", (req, res) => {
  res.send("LangGraph backend is running!");
});

// ✅ Health check route
app.get("/status", (req, res) => {
  res.json({ message: "LangGraph backend is running!" });
});

// Start the server
const PORT = process.env.PORT || 2024;
app.listen(PORT, () => console.log(`LangGraph running on port ${PORT}`));
