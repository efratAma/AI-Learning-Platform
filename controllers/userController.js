const { User, Prompt } = require('../models');

const registerUser = async (req, res) => {
  const { name, phone } = req.body;

  try {
    const existing = await User.findOne({ where: { phone } });
    if (existing) {
      return res.status(400).json({ error: 'מספר טלפון כבר רשום במערכת' });
    }
    const newUser = await User.create({ name, phone });
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'המספר קיים כבר במערכת' });
  }
};
const getUserByPhone = async (req, res) => {
  const { phone } = req.params;
  try {
    console.log('קיבלתי בקשה לטלפון:', phone);
    const user = await User.findOne({ where: { phone } });
    if (!user) return res.status(404).json(null);
    const isAdmin = phone === process.env.ADMIN_PHONE;
    //res.json({ user, isAdmin });
    res.json({ ...user.toJSON(), isAdmin });
  } catch (err) {
    res.status(500).json({ error: 'שגיאה בבדיקה מול מסד הנתונים' });
  }
};


async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'שגיאה בשליפת המשתמשים' });
  }
}

const getUserHistory = async (req, res) => {
  try {
    console.log('user id from params:', req.params.id);
    const prompts = await Prompt.findAll({
      where: { user_id: req.params.id },
      order: [['createdAt', 'DESC']]
    });
    res.json(prompts);
  } catch (err) {
    res.status(500).json({ error: 'שגיאה בשליפת היסטוריה' });
  }
};
module.exports = { registerUser, getUsers, getUserHistory, getUserByPhone };
