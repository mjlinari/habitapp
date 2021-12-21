const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Location extends Model{}

Location.init({
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    }
},{
    sequelize:db,
    modelName:"location"
})

module.exports = Location