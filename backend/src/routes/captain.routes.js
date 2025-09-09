const express = require("express");
const { registerCaptainController, loginCaptainController, logoutCaptainController, profileCaptainController } = require("../controllers/captain.controller");
const { captainMiddleware } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", registerCaptainController);
router.post("/login", loginCaptainController);
router.get("/profile", captainMiddleware, profileCaptainController);
router.get("/logout", logoutCaptainController);

module.exports = router;