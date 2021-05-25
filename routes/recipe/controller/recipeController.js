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
    createRecipe: function(body, callback) {
        let saveRecipe = new Recipe({
            recipeName: body.recipeName,
        });

        //save the saveUser using.save
        saveRecipe.save(function (err, payload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, payload);
            }
        });
    },
};