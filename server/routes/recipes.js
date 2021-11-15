
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

router.get("/all-recipes/:id([a-z0-9]{24})", (req, res) => {
  console.log("REQ BODY", req.params.id)
  recipeModel
    .findById(req.params.id)
    .then((recipe) => res.status(200).json(recipe))
    .catch((err) => {
      console.error(err);
    });
})

router.get("/all-recipes?:query", (req, res) => {
    // console.log("this is the req query category", req.query.category)
    console.log("this is the req query ", req.query)
    // console.log("these are the req query ingredients", req.query.ingredients)
    if (req.query.name === "all") {
      console.log("yep query is empty")
      recipeModel
        .find()
        .populate("author")
        .then((recipes) => res.status(200).json(recipes))
        .catch((err) => console.error(err))
      }
    recipeModel
      .find({
        title: {$regex: new RegExp(req.query.name), $options: i}
      })
      .populate("author")
      .then((recipes) => {
        res.status(200).json(recipes)
        console.log("i did a search i am a good route :') here is what I found: ", recipes)
      })
      .catch((err) => console.error(err))
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