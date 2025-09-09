const captainModel = require("../models/captain.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BlacklistToken = require("../models/blacklistToken.model");


const registerCaptainController = async (req, res) => {
    const { fullName: { firstName, lastName }, email, password, status, vehicle: { color, plate, capacity, vehicleType } } = req.body;

    if (!firstName || !lastName || !email || !password || !status || !color || !plate || !capacity || !vehicleType) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const isCaptainExists = await captainModel.findOne({ email });

    if (isCaptainExists) {
        return res.status(400).json({ message: "Captain already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const captain = await captainModel.create({
        fullName: {
            firstName: firstName,
            lastName: lastName
        },
        email: email,
        password: hashedPassword,
        status: status,
        vehicle: {
            color: color,
            plate: plate,
            capacity: capacity,
            vehicleType: vehicleType
        }
    });

    const token = jwt.sign({ id: captain._id, email: captain.email }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return res.status(201).json({ message: "Captain registered successfully", token, captain });
}

const loginCaptainController = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const captain = await captainModel.findOne({ email });

    if (!captain) {
        return res.status(404).json({ message: "Captain not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, captain.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: captain._id, email: captain.email }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", token);

    return res.status(200).json({ message: "Captain logged in successfully", token, captain });
}

const logoutCaptainController = (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({ message: "Captain logged out successfully" });
}

const profileCaptainController = async (req, res) => {
    const { token } = req.cookies;
    await BlacklistToken.create({ token });
    const captain = req.captain;
    return res.status(200).json({ message: "Captain profile fetched successfully", captain });
}

module.exports = { registerCaptainController, loginCaptainController, logoutCaptainController, profileCaptainController };