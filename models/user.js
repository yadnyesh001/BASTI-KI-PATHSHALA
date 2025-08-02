const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['volunteer', 'intern', 'admin'],
    default: 'volunteer',
  },
});

module.exports = mongoose.model('User', userSchema);