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
}