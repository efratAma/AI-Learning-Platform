const express = require('express');
const router = express.Router();
const { getAllCategories, getSubCategories } = require('../controllers/categoryController');

router.get('/categories', getAllCategories); // GET /api/categories
router.get('/subcategories/:category_id', getSubCategories); // GET /api/subcategories/:category_id

module.exports = router;
