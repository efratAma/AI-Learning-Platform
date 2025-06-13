const express = require('express');
const router = express.Router();
const { createPrompt } = require('../controllers/promptController');

console.log("createPrompt is", createPrompt);
console.log("typeof createPrompt:", typeof createPrompt);

router.post('/prompts', createPrompt);
//router.post('/', handlePromptRequest);

module.exports = router;