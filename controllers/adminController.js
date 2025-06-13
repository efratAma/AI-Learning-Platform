const { User, Prompt, Category, SubCategory } = require('../models');

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'שגיאה בשליפת משתמשים' });
  }
}

async function getAllPrompts(req, res) {
  try {
    const prompts = await Prompt.findAll({
      include: [
        { model: User, attributes: ['name', 'phone'] },
        { model: Category, attributes: ['name'] },
        { model: SubCategory, attributes: ['name'] }
      ],
      order: [['created_at', 'DESC']]
    });
    res.json(prompts);
  } catch (err) {
    res.status(500).json({ error: 'שגיאה בשליפת prompts' });
  }
}

const getAllUsersWithHistory = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Prompt,
          as: 'prompts',
          separate: true,
          order: [['createdAt', 'DESC']]
        }
      ]
    });
    res.json(users);
  } catch (err) {
    console.error('שגיאה בקבלת משתמשים:', err);
    res.status(500).json({ error: 'שגיאה בקבלת מידע' });
  }
}

module.exports = { getAllUsers, getAllPrompts, getAllUsersWithHistory };
