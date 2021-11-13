
const express = require("express");
const router = new express.Router();
const commentModel = require("./../model/comments")
const ratingModel = require("./../model/ratings")
const recipeModel = require("./../model/recipes")
const userModel = require("./../model/users")

<<<<<<< HEAD
router.get("/all-recipes", (req, res) => {
    recipeModel
      .find()
      .populate("author")
      .then((recipes) => res.status(200).json(recipes))
=======

  
  router.get("/all-recipes/:id", (req, res) => {
    console.log("REQ BODY", req.params.id)
    recipeModel
      .findById(req.params.id)
      .then((recipe) => res.status(200).json(recipe))
>>>>>>> 978c5fd2057463fddf43f9cdac3c0839cbfe818e
      .catch((err) => {
        console.error(err);
      });
  });
<<<<<<< HEAD
=======
  
>>>>>>> 978c5fd2057463fddf43f9cdac3c0839cbfe818e



module.exports = router;