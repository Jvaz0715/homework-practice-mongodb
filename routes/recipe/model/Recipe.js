// this will be the file where we make a `template` for recipes

const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
    },
});

//export module for use in the recipeController js
// look up .model as a method of mongoose

module.exports = mongoose.model("recipe", recipeSchema);
