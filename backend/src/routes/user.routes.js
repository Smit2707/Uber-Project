const express = require("express");
const { authMiddleware } = require("../middlewares/auth.middleware");
const userController = require("../controllers/user.controller");
const logoutController = require("../controllers/logout.controller");

const router = express.Router();

router.get("/profile", authMiddleware, userController);
router.get("/logout",authMiddleware, logoutController);

module.exports = router;