const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allownull: false,
    },
  },
  {
    sequelize: db,
    modelName: "category",
  }
);

module.exports= Category
