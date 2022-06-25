const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
<<<<<<< HEAD
    // define columns
=======
>>>>>>> d06f4c63b0befe630d6c9e677096577d578733fb
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
<<<<<<< HEAD
  },
=======
    },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
>>>>>>> d06f4c63b0befe630d6c9e677096577d578733fb
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
