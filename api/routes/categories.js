const express = require("express")
const router = express.Router()
const CategoriesController = require("../controllers/categoriesController")

router.get("/", CategoriesController.getAllCategories)
router.get("/:id", CategoriesController.getCategoryById)

module.exports = router