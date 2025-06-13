const { Category, SubCategory } = require('../models');

async function getAllCategories(req, res) {
  try {
    const categories = await Category.findAll({
      include: [{
        model: SubCategory,
        as: 'sub_categories' // בדיוק אותו alias כמו שהגדרת בקשר
      }]
    });
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'שגיאה בשליפת קטגוריות' });
  }
}

async function getSubCategories(req, res) {
  const { category_id } = req.params;
  try {
    const subs = await SubCategory.findAll({ where: { category_id } });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: 'שגיאה בשליפת תתי־קטגוריה' });
  }
}

module.exports = { getAllCategories, getSubCategories };
