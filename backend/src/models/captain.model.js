const mongoose = require("mongoose")

const captainSchema = new mongoose.Schema({
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
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minLength: [3, "Color must be at least 3 characters long"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"]
        },
        plate: {
            type: String,
            required: true,
            minLength: [3, "Plate must be at least 3 characters long"]
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["car", "motorcycle", "auto"],
            default: "car"
        }
    },
    location: {
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        }
    }
}, {
    timestamps: true
});

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;