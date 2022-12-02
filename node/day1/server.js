const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = require("./src/config/express");

dotenv.config();

// environmental variables
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;

// mongodb connection
mongoose.connect(MONGODB_URI, (err) => {
  if (err) {
    return console.log("Server is not connected to database", err);
  }
  return console.log("Server is connected to database successfully");
});

// listens on port for connection
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT} `);
});
