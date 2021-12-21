const express = require("express");
const passport = require("passport");
const router = express.Router();
const AuthController = require("../controllers/authController");
const isLoggedIn = require("../utils/isLoggedIn")

router.post("/register", AuthController.register);
router.post("/login", passport.authenticate("local"), AuthController.login);
router.post("/logout", AuthController.logout);
router.get("/me",isLoggedIn, AuthController.persistence);
router.get("/me/favorites",isLoggedIn,AuthController.getAllFavorites)
router.post("/me/favorites/:propertyId",isLoggedIn, AuthController.addToFavorites)
router.delete("/me/favorites/:propertyId",isLoggedIn, AuthController.removeFromFavorites)

module.exports = router;
