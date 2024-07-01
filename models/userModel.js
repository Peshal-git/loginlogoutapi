const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true,
        enum: ["English", "Thai"],
        default: "English"
    },
    dob: {
        type: Date,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    memberId: {
        type: String,
        required: true
    }
})


const User = mongoose.model("User", userSchema)

module.exports = User