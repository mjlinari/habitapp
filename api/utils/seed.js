const { Category, Location, User, Property } = require("../models");
const db = require("../config/db");
const { categories, properties, locations } = require("./fakeData");

const seedProcess = async () => {
  const createAdmin =  User.create({
    name: "Admin",
    lastname: "Super",
    email: "admin@gmail.com",
    password: "password",
    isAdmin: true,
  });
  const seedLocations =  Location.bulkCreate(locations);
  const seedCategories =  Category.bulkCreate(categories);
  const seedProperties =  Property.bulkCreate(properties);

  await Promise.all([seedLocations,seedCategories,seedProperties, createAdmin])

};

db.sync()
  .then(seedProcess)
  .then(() => process.exit(0))
  .catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });
