const express = require("express");
const router = express.Router();
const PropertiesController = require("../controllers/propertiesController");

router.get("/", PropertiesController.getAllProperties);
router.get("/:id", PropertiesController.getPropertyById);
router.get("/category/:categoryId", PropertiesController.getPropertiesByCategory);
router.get("/location/:locationId", PropertiesController.getPropertiesByLocation);

module.exports = router;
