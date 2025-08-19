const app = require("./src/app");
const cookieParser = require("cookie-parser");
const http = require('http')
const express = require("express");



const server = http.createServer(app);

app.use(cookieParser());




server.listen(process.env.PORT, () => {
    console.log("Server is running on " + process.env.PORT + ".");
});