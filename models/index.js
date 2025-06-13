const sequelize = require('../config/database');
const User = require('./User');
const Category = require('./Category');
const SubCategory = require('./SubCategory');
const Prompt = require('./Prompt');

Category.hasMany(SubCategory, { foreignKey: 'category_id', as: 'sub_categories' });
SubCategory.belongsTo(Category, { foreignKey: 'category_id' });

User.hasMany(Prompt, { foreignKey: 'user_id' });
Prompt.belongsTo(User, { foreignKey: 'user_id' });

Category.hasMany(Prompt, { foreignKey: 'category_id' });
Prompt.belongsTo(Category, { foreignKey: 'category_id' });

SubCategory.hasMany(Prompt, { foreignKey: 'sub_category_id' });
Prompt.belongsTo(SubCategory, { foreignKey: 'sub_category_id' });

module.exports = { sequelize, User, Category, SubCategory, Prompt };
