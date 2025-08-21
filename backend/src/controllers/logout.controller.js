const BlacklistToken = require("../models/blacklistToken.model");

const logoutController = async (req, res) => {
    res.clearCookie('token');
    const token = req.cookies.token;
    if (token) {
        await BlacklistToken.create({ token });
    }
    res.status(200).json({ message: "Logged out successfully" });
};

module.exports = logoutController;