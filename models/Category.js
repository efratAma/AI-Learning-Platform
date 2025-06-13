const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'Categories',
  freezeTableName: true
});
Category.associate = (models) => {
  Category.hasMany(models.SubCategory, {
    foreignKey: 'category_id',
    as: 'sub_categories'
  });
};


module.exports = Category;
