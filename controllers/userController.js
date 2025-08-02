const User = require('../models/user');

const registerUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const user = await User.create({ name, email, role });
    res.status(201).json({ msg: 'User registered', user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied' });
    }

    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = { registerUser, getAllUsers };
