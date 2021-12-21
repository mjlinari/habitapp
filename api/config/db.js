const { Sequelize } = require("sequelize");
const db = new Sequelize("habitapp-db", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging:false,
});

module.exports = db;
