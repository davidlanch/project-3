
const express = require("express");
const router = new express.Router();
const commentModel = require("./../model/comments")
const ratingModel = require("./../model/ratings")
const recipeModel = require("./../model/recipes")
const userModel = require("./../model/users")


// router.get("/rates", async (req, res) => {
//    console.log("you are here in rates")
  

//   try {
//     const takeRate = await ratingModel.find({rate});
//     console.log("you are in rate",takeRate)
//   } catch (err) {
//     next(err);
//   }
// });

//   /// think about all the DIFFERENT INFORMATIONS you'll need out or in your model

//   // get rates for 1 receipe
//   // get  all reates per user ?
//   // post 1 user(id) rate 1 receipe(id)
//   // pact 1 user()id rate 1 receipe(id)


module.exports = router;