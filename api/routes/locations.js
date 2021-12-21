const express = require("express");
const router = express.Router();
const LocationsController = require("../controllers/locationsController")

router.get("/", LocationsController.getAllLocations)
router.get("/:id", LocationsController.getLocationById)


module.exports = router;
