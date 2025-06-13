// userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, getUserHistory, getUserByPhone } = require('../controllers/userController');


router.post('/users', registerUser);
router.get('/users/by-phone/:phone', getUserByPhone);
router.get('/users/:id/history', getUserHistory);


module.exports = router;
