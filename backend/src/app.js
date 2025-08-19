require("dotenv").config();
const express = require("express")
const cors = require("cors");
const connectToDb = require("./db/db");
const authRoutes = require("./routes/auth.routes")
const app = express();

connectToDb();
app.use(express.json());
app.use(cors())

app.use("/api/auth", authRoutes)

module.exports = app;