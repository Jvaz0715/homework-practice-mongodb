// bring in model/recipe
const Recipe = require("../model/Recipe");

// no create a function to export calld getAllRecipes that will be used in recipesRouter

module.exports = {
    getAllRecipes: function(callback) {
        Recipe.find({}, (err, payload) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, payload);
            };
        });
    },
    //14. in recipeController create a function called createRecipe the function should create a recipe and make sure it is saved to the monogd
    createRecipe: function(callback) {
        let createdRecipe = new Recipe({
            recipeName: body.recipeName,
        });

        //save the createdUser using.save
        createdRecipe.save(function (err, payload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, payload);
            }
        });
    },
};