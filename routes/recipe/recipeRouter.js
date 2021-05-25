var express = require('express');
var router = express.Router();

//bring in the recipeController function forumula
const recipeController = require("./controller/recipeController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    test: true,
  });
});

module.exports = router;