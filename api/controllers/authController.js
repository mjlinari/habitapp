const { rsort } = require("semver");
const { User, Property } = require("../models");

class AuthController {
  static async register(req, res) {
    try {
      await User.create(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
    }
  }

  static async login(req, res) {
    try {
      await res.status(200).send(req.user);
    } catch (error) {
      console.log(error);
    }
  }

  static async logout(req, res) {
    try {
      console.log("REQ.USER", req.user);
      await req.logOut();
      console.log("REQ.USER", req.user);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }

  static async persistence(req, res) {
    try {
      res.send(req.user);
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllFavorites(req, res) {
    try {
      const user = req.user;
      const favorites = await user.getProperties();

      res.status(200).send(favorites);
    } catch (error) {
      console.log(error);
    }
  }

  static async addToFavorites(req, res) {
    try {
      const user = req.user;
      const property = await Property.findByPk(req.params.propertyId);

      await user.addProperty(property);
      res.sendStatus(201);

      res.status(200).send(favorites);
    } catch (error) {
      console.log(error);
    }
  }

  static async removeFromFavorites(req, res) {
    try {
      const user = req.user;
      const property = await Property.findByPk(req.params.propertyId);

      await user.removeProperty(property);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AuthController;
