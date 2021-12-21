const User = require("./User");
const Property = require("./Property");
const Location = require("./Location");
const Category = require("./Category");

//Relations
Category.hasMany(Property, { as: "category" });
Location.hasMany(Property, { as: "location" });

User.belongsToMany(Property, {
  through: "favorites",
  foreignKey: "userId",
  otherKey: "propertyId",
});
module.exports = { User, Property, Location, Category };
