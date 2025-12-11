require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./users/routers/auth.routes");
const adminRoutes = require("./admins/routes/admin.routes");
const productsRoutes = require("./products/routes/products.routes");

const connectDB = require("./db/db");
const app = express();
connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // correct
    credentials: true,
  })
);

// Static files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productsRoutes);

module.exports = app;
