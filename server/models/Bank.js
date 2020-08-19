const mongoose = require("mongoose");

const BankSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 0,
  },
  pan: {
    type: Number,
    required: true,
    default: 0,
  },
  nationality: {
    type: String,
    required: true,
    default: "Bangladeshi",
  },
  accountNum: {
    type: Number,
    required: true,
    default: 0,
  },
  creditCard: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  loans: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Banks", BankSchema);
