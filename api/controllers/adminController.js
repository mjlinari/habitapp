const { Property, Category, Location } = require("../models");

class AdminController {
  static async addNewProperty(req, res) {
    try {
      const property = await Property.create(req.body);
      const category = await Category.findOne({
        where: {
          name: req.body.category,
        },
      });
      const location = await Location.findOne({
        where: {
          name: req.body.location,
        },
      });

      await category.addCategory(property);
      await location.addLocation(property);

      res.sendStatus(201);
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteProperty(req, res) {
    try {
      await Property.destroy({
        where: {
          id: req.params.propertyId,
        },
      });

      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }

  static async modifyProperty(req, res) {
    try {
      await Property.update(req.body, {
        where: {
          id: req.params.propertyId,
        },
        returning: true,
      });

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  }

  static async addNewCategory(req, res) {
    try {
      await Category.create(req.body);

      res.sendStatus(201);
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteCategory(req, res) {
    try {
      await Category.destroy({
        where: {
          id: req.params.categoryId,
        },
      });

      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }

  static async modifyCategory(req, res) {
    try {
      await Category.update(req.body, {
        where: {
          id: req.params.categoryId,
        },
        returning: true,
      });

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  }

  static async addNewLocation(req, res) {
    try {
      await Location.create(req.body);

      res.sendStatus(201);
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteLocation(req, res) {
    try {
      await Location.destroy({
        where: {
          id: req.params.locationId,
        },
      });

      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }

  static async modifyLocation(req, res) {
    try {
      await Location.update(req.body, {
        where: {
          id: req.params.locationId,
        },
        returning: true,
      });

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AdminController;
