const express = require("express");
const router = express.Router();
const auth = require("./auth");
const properties = require("./properties");
const categories = require("./categories");
const locations = require("./locations");
const admin = require("./admin")

router.use("/auth", auth);
router.use("/properties", properties);
router.use("/categories", categories);
router.use("/locations", locations);
router.use("/admin", admin);

module.exports = router;
