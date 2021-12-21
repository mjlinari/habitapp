const { Category } = require("../models");

class CategoriesController {
  static async getAllCategories(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).send(categories);
    } catch (error) {
      console.log(error);
    }
  }

  static async getCategoryById (req,res){
      try{
          const category = await Category.findOne({
              where:{
                  id:req.params.id
              }
          })
          res.status(200).send(category)
      }catch (error){
          console.log(error)
      }
  }
}

module.exports = CategoriesController;
