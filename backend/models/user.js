const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxLength: 50,
    },
},{timestamps: true});

module.exports = mongoose.model("User",UserSchema);