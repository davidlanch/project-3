
const express = require("express");
const router = new express.Router();
const commentModel = require("./../model/comments")
const ratingModel = require("./../model/ratings")
const recipeModel = require("./../model/recipes")
const userModel = require("./../model/users")


router.get("/rates", (req, res) => {
   
    console.log("im in rates") 
    console.log("eltiempo" ,req.body)
    console.log("eltiempo" ,res.body)
    
    ratingModel
        .find()
        .then((rates) => res.status(200).json(rates))
        .catch((err) => console.log("nono", err))
  })

  /// think about all the DIFFERENT INFORMATIONS you'll need out or in your model

  // get rates for 1 receipe
  // get  all reates per user ?
  // post 1 user(id) rate 1 receipe(id)
  // pact 1 user()id rate 1 receipe(id)


module.exports = router;