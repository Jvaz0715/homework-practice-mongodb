const Recipe = require("../model/Recipe");

// no create a function to export calld getAllRecipes that will be used in recipesRouter

module.exports = {
    getAllRecipes: function (callback) {
        Recipe.find({}, function (err, payload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, payload);
            };
        });
    },
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