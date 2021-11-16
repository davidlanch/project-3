const express = require("express");
const router = new express.Router();
const commentModel = require("./../model/comments");
const ratingModel = require("./../model/ratings");
const recipeModel = require("./../model/recipes");
const userModel = require("./../model/users");

router.get("/my-recipes/:authorId", (req, res) => {
  recipeModel
    .find({ author: req.params.authorId })
    .populate("author")
    .then((recipes) => res.status(200).json(recipes));
});

router.delete("/my-recipes/:recipeId", (req, res) => {
  recipeModel
    .findByIdAndDelete(req.params.recipeId)
    .then((recipe) => res.status(200).json(recipe));
});

router.get("/my-recipes/:recipeId/edit", (req, res) => {
    recipeModel
      .findById(req.params.recipeId)
      .then((recipe) => res.status(200).json(recipe));
  });

  router.patch("/my-recipes/:recipeId/edit", (req, res) => {
    recipeModel
      .findById(req.params.recipeId)
      .then((recipe) => res.status(200).json(recipe));
  });

  // const res = await APIHandler.get("/my-recipes/" + currentUser._id + "/" + this.props.id)

  router.get("/:authorId([a-z0-9]{24})", (req, res) => {
    userModel
      .findById(req.params.authorId).populate("favorites")
      .then((user) =>  {
          res.status(200).json(user);
        });
  });
 
module.exports = router;
