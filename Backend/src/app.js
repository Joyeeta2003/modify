const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Routes
const authRoutes = require("./routes/auth.route");

app.use("/api/auth", authRoutes);

module.exports = app;