
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
      .then((recipes) => res.status(200).json(recipes))})

  
  router.get("/all-recipes/:id", (req, res) => {
    console.log("REQ BODY", req.params.id)
    recipeModel
      .findById(req.params.id)
      .then((recipe) => res.status(200).json(recipe))
      .catch((err) => {
        console.error(err);
      });
  })

  router.get("/all-recipes/add-to-favorite/:userId/:recipeId", async (req, res, next) => {
    try {
        const updatedRecipe = await userModel.findByIdAndUpdate(req.params.userId, {$push:{favorites: req.params.recipeId}});
        res.status(200).json(updatedRecipe);
        console.log("updated recipe", updatedRecipe);
      } catch (err) {
        next(err);
      }
  })

  router.get("/all-recipes/remove-from-favorite/:userId/:recipeId", async (req, res, next) => {
    try {
        const updatedRecipe = await userModel.findByIdAndUpdate(req.params.userId, {$pull:{favorites: req.params.recipeId}});
        res.status(200).json(updatedRecipe);
        console.log("updated recipe", updatedRecipe);
      } catch (err) {
        next(err);
      }
  })


module.exports = router;