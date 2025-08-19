const mongoose = require("mongoose");

const connectToDb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to the db.");
    } catch (error) {
        console.log(`Error connecting to the db: ${error.message}`);
    }
}

module.exports = connectToDb;