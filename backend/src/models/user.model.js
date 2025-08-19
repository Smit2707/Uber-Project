const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minLength: [2, "First name must be at least 2 characters long"]
        },
        lastName: {
            type: String,
            required: true,
            minLength: [2, "Last name must be at least 2 characters long"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    socketId: {
        type: String
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("user", userSchema);


module.exports = userModel;