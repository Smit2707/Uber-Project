const express = require("express");
const { userRegisterController } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", userRegisterController)

module.exports = router;