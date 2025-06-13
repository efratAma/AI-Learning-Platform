const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./Category');

const SubCategory = sequelize.define('SubCategory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id'
    }
  }
});
SubCategory.associate = (models) => {
  SubCategory.belongsTo(models.Category, {
    foreignKey: 'category_id',
    as: 'category'
  });
};


module.exports = SubCategory;
