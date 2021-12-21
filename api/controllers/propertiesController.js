const { Property, Category, Location } = require("../models");

class PropertiesController {
  static async getAllProperties(req, res) {
    try {
      const properties = await Property.findAll();
      res.status(200).send(properties);
    } catch (error) {
      console.log(error);
    }
  }

  static async getPropertyById(req, res) {
    try {
      const property = await Property.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send(property);
    } catch (error) {
      console.log(error);
    }
  }

  static async getPropertiesByCategory(req, res) {
    try {
      const properties = await Property.findAll({
        where: {
          categoryId: req.params.categoryId,
        },
      });
      res.status(200).send(properties);
    } catch (error) {
      console.log(error);
    }
  }

  static async getPropertiesByLocation(req, res) {
    try {
      const properties = await Property.findAll({
        where: {
          locationId: req.params.locationId,
        },
      });
      res.status(200).send(properties);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PropertiesController;
