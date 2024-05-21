const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true,
        maxLength: 50,
    },
    amount: {
        type: Number,
        trim: true,
        required: true,
        maxLength: 20,
    },
    type: {
        type: String,
        trim: true,
        default: "income"
    },
    date: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
},{timestamps: true});

module.exports = mongoose.model("IncomeSchema",IncomeSchema);