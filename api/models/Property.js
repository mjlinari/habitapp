const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Property extends Model {}

Property.init(
  {
    description: {
      type: DataTypes.TEXT,
      allownull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
    truncatedDescription: {
      type: DataTypes.VIRTUAL,
      get: function () {
        return this.description ? `${this.description.slice(0, 20)}...` : "";
      },
    },
  },
  {
    sequelize: db,
    modelName: "property",
  }
);

module.exports = Property;
