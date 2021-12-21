const express = require("express");
const router = express.Router();
const isLoggedAsAdmin = require("../utils/isLoggedAsAdmin");
const AdminController = require("../controllers/adminController");

router.post("/", isLoggedAsAdmin, AdminController.addNewProperty);
router.delete("/:propertyId", isLoggedAsAdmin, AdminController.deleteProperty);
router.put("/:propertyId", isLoggedAsAdmin, AdminController.modifyProperty);

router.post("/categories", isLoggedAsAdmin, AdminController.addNewCategory);
router.delete("/categories/:categoryId", isLoggedAsAdmin, AdminController.deleteCategory);
router.put("/categories/:categoryId", isLoggedAsAdmin, AdminController.modifyCategory);

router.post("/locations", isLoggedAsAdmin, AdminController.addNewLocation);
router.delete("/locations/:locationId", isLoggedAsAdmin, AdminController.deleteLocation);
router.put("/locations/:locationId", isLoggedAsAdmin, AdminController.modifyLocation);

module.exports = router;
