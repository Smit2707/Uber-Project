require("dotenv").config();
const express = require("express")
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
const authRoutes = require("./routes/auth.routes")
const userRoutes = require("./routes/user.routes")
const captainRoutes = require("./routes/captain.routes")
const app = express();

connectToDb();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes);
app.use("/api/captain", captainRoutes);

module.exports = app;