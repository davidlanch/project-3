
const express = require("express");
const router = new express.Router();
const commentModel = require("./../model/comments")
const ratingModel = require("./../model/ratings")
const recipeModel = require("./../model/recipes")
const userModel = require("./../model/users")
const uploader = require("./../config/cloudinary");

router.post("/", uploader.single("image"), async (req, res, next) => {
  console.log(req.file);
  try {
    const newRecipe = await recipeModel.create({ ...req.body, image: req.file.path }); //  req.file.path  => provided by cloudinary's response
    res.status(201).json(newRecipe);
  } catch (err) {
    next(err);
  }
});

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

module.exports = router;