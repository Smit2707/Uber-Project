const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const BlacklistToken = require('../models/blacklistToken.model');

const authMiddleware = async (req, res, next) => {
    const { token } = req.cookies
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: "Unauthorized token not found." });
    }

    const isBlacklisted = await BlacklistToken.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = {
    authMiddleware
};