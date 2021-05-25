var express = require('express');
var router = express.Router();

//bring in the recipeController function forumula
const recipeController = require("./controller/recipeController");

/* GET recipes listing. */
router.get('/', function(req, res, next) {
  res.json({
    test: true,
  });
});

// #13 use the getAllRecipe function in recipeRouter.js the function show get all the recipes

router.get("/get-all-recipes", (req, res) => {
  recipeController.getAllRecipes((err, payload) => {
    if (err) {
      res.status(500).json({
        message: "Error",
        error: err,
      });
    } else {
      res.json({
        message: "success",
        data: payload,
      });
    };
  });
});

//14. in recipeController create a function called createRecipe the function should create a recipe and make sure it is saved to the monogd create POST to go with this

router.post("/create-recipe", (req, res) => {
  recipeController.createRecipe(req.body, (err, payload) => {
    if (err) {
      res.status(500).json({
        message: "Error",
        error: err,
      });
    } else {
      res.json({
        message: 'success',
        data: payload,
      });
    };
  });
});

module.exports = router;