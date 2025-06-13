
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

const sequelize = require('./config/database.js');

const User = require('./models/User');
const Prompt = require('./models/Prompt');


User.hasMany(Prompt, { foreignKey: 'user_id', as: 'prompts' });
Prompt.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

const userRoutes = require('./routes/userRoutes');
const promptRoutes = require('./routes/promptRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', userRoutes);
app.use('/api', promptRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = {
  sequelize,
  User,
  Prompt
};

