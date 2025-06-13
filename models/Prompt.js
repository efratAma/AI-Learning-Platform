const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Prompt = sequelize.define('Prompt', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sub_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prompt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },{
    timestamps: true
  });

module.exports = Prompt;
