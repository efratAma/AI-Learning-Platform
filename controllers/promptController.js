
const { Prompt, Category, SubCategory } = require('../models');
const { generateLesson } = require('../services/openaiService');
require('dotenv').config();

const createPrompt = async (req, res) => {
  const { user_id, category_id, sub_category_id, prompt } = req.body;

  try {
    const categoryObj = await Category.findByPk(category_id);
    const subCategoryObj = await SubCategory.findByPk(sub_category_id);

    const categoryName = categoryObj?.name || 'ללא קטגוריה';
    const subCategoryName = subCategoryObj?.name || 'ללא תת קטגוריה';

    const fullPrompt = `המשתמש בחר בקטגוריה "${categoryName}" ובתת-קטגוריה "${subCategoryName}". השאלה היא: ${prompt}`;

    const responseText = await generateLesson(fullPrompt);

    const saved = await Prompt.create({
      user_id,
      category_id,
      sub_category_id,
      prompt,
      response: responseText
    });

    res.json(saved);
  } catch (error) {
    console.error("Error in createPrompt:", error.message);
    res.status(500).json({ error: "שגיאה בקריאה ל־OpenAI" });
  }
};

module.exports = {
  createPrompt
};
