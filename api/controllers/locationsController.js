const { Location } = require("../models");

class LocationsController {
  static async getAllLocations(req, res) {
    try {
      const locations = await Location.findAll();
      res.status(200).send(locations);
    } catch (error) {
      console.log(error);
    }
  }

  static async getLocationById(req, res) {
    try {
      const location = await Location.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send(location.dataValues);
    } catch (error) {
      console.log(error);
    }
  }

 
}

module.exports = LocationsController;
