//set schema

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    requried: true,
  },
  mobile: {
    type: String,
    requried: true,
  },
  password: {
    type: String,
    requried: true,
  },
  is_verified: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('User', userSchema);