const express = require('express');
const router = express.Router();
const { getAllUsers, getAllPrompts, getAllUsersWithHistory } = require('../controllers/adminController');


router.get('/users', getAllUsers);
router.get('/prompts', getAllPrompts);
router.get('/users-history', getAllUsersWithHistory);

module.exports = router;
