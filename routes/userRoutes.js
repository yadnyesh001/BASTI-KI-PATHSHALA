const express = require('express');
const { registerUser, getAllUsers } = require('../controllers/userController');
const { mockAuth } = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.get('/', mockAuth, getAllUsers);

module.exports = router;
