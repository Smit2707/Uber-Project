const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userRegisterController = async (req, res) => {
    console.log(req.body)
    const { fullName: { firstName, lastName }, email, password } = req.body;

    const isUserExists = await userModel.findOne({ email });

    if(isUserExists){
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

    return res.status(201).json({ message: "User registered successfully", token, user });
}

module.exports = {
    userRegisterController
};