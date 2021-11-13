
const express = require("express");
const router = new express.Router();
const commentModel = require("./../model/comments")
const ratingModel = require("./../model/ratings")
const recipeModel = require("./../model/recipes")
const userModel = require("./../model/users")

router.get("/all-recipes", (req, res) => {
    recipeModel
      .find()
      .populate("author")
      .then((recipes) => res.status(200).json(recipes))
      .catch((err) => {
        console.error(err);
      });
  });



module.exports = router;