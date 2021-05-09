const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
// DB Config
mongoose.connect(
  "mongodb://localhost/fb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Database Up and Running!")
);

// Import Routes
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/posts");

// Routes Middleware
app.use(express.json());
app.use("/api", authRoutes);
app.use("/user", postRoutes);

// Listen on Port
app.listen(3000, () => console.log("Server Up and Running!"));
