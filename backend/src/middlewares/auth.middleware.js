const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const BlacklistToken = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

const authMiddleware = async (req, res, next) => {
    const { token } = req.cookies;
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

const captainMiddleware = async (req, res, next) => {
    const { token } = req.cookies;
    console.log("Captain Token: ",token);
    if (!token) {
        return res.status(401).json({ message: "Unauthorized token not found." });
    }

    const isBlacklisted = await BlacklistToken.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded.id);
        if (!captain) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.captain = captain;
        next(); 
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = {
    authMiddleware,
    captainMiddleware
};