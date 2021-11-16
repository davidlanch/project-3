
const express = require("express");
const router = new express.Router();
const commentModel = require("./../model/comments")
const ratingModel = require("./../model/ratings")
const recipeModel = require("./../model/recipes")
const userModel = require("./../model/users")


router.get("/comments/:id", (req, res, next) => {
  commentModel.find({recipe: req.params.id }).populate("author")
  .then((comments) => {
    console.log(comments);
    res.status(200).json(comments)
  })
  .catch((error) => console.error(error))
  
});

router.post("/comments/:authorId/:recipeId", async (req, res, next) => {  
  const newObject = req.body
  newObject.author = req.params.authorId
  newObject.recipe = req.params.recipeId
  console.log('REQ USEEEER', req.params.authorId)
  console.log("REQ BODY", req.body)
  commentModel.create(newObject)
  .then((newComment) => res.status(200).json({newComment}))
  .catch((error) => console.error(error))
  
});





module.exports = router;