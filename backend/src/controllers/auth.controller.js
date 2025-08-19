const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userRegisterController = async (req, res) => {
    console.log(req.body)
    const { fullName: { firstName, lastName }, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const isUserExists = await userModel.findOne({ email });

    if (isUserExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await userModel.create({
        fullName: {
            firstName: firstName,
            lastName: lastName
        },
        email: email,
        password: hashedPassword
    })

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);

    res.cookie("token", token);

    return res.status(201).json({ message: "User registered successfully", token, user });
}

const userLoginController = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });
    console.log(user)
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);

    res.cookie("token", token);

    return res.status(200).json({ message: "User logged in successfully", token, user });
}

module.exports = {
    userRegisterController,
    userLoginController
};