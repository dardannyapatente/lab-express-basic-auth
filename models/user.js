// User model goes here
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 1,
    maxlength: 24,
    pattern: /^[a-z0-9]+$/,
    lowercase: true,
  },
  passwordHashAndSalt: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;