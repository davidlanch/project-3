
const express = require("express");
const router = new express.Router();
const commentModel = require("./../model/comments")
const ratingModel = require("./../model/ratings")
const recipeModel = require("./../model/recipes")
const userModel = require("./../model/users")
const uploader = require("./../config/cloudinary");

const allCategories = [
  "Meat",
  "Dessert",
  "Miscellaneous",
  "Pasta",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
  "Breakfast",
]

router.post("/recipe/create", uploader.single("image"), async (req, res, next) => {
 
  req.body.quantities = req.body.quantities.split(",");
  req.body.ingredients = req.body.ingredients.split(",")
  

  try {
    const newRecipe = await recipeModel.create({ ...req.body, image: req.file.path,  }); //  req.file.path  => provided by cloudinary's response
    res.status(201).json(newRecipe);
  } catch (err) {
    next(err);
  }
});

router.patch("/recipe/update/:id([a-z0-9]{24})", uploader.single("image"), async (req, res, next) => {

  req.body.quantities = req.body.quantities.split(",");
  req.body.ingredients = req.body.ingredients.split(",")
  
  try {
    const updatedRecipe = await recipeModel.findByIdAndUpdate(
      req.params.id,  {...req.body, image: req.file.path},
      { new: true }
    );
    res.status(200).json(updatedRecipe);
  } catch (err) {
    next(err);
  }
});

router.get("/all-recipes/:id([a-z0-9]{24})", (req, res) => {
  
  recipeModel
    .findById(req.params.id)
    .then((recipe) => res.status(200).json(recipe))
    .catch((err) => {
      console.error(err);
    });
})

router.get("/all-recipes", (req, res) => {

    // ----------- if the query is empty, get all recipes ------------
    // i will probably remove this soon
    if (Object.keys(req.query).length === 0) {
      recipeModel
        .find()
        .populate("author")
        .then((recipes) => {
          res.status(200).json(recipes);
        })
        .catch((err) => console.error(err))

    } else {

    // ----------else, get only the wanted recipes -------------------
    
    // first build the criteria
    
    const nameRegexp = new RegExp(req.query.name, 'ig');
    const category = req.query.category || allCategories;
    const ingredientsRegexp = req.query.ingredients.map((ingredient) => new RegExp(ingredient, 'ig'))

    // the actual search in the db
    recipeModel
      .find(
        {$and: [
        {
          title: nameRegexp
        }, 
        {
          category: {$in: category}
        },
        {
          ingredients: {$all: ingredientsRegexp}
        }
      ]}
      )
      .populate("author")
      .then((recipes) => {
        res.status(200).json(recipes)
      })
      .catch((err) => console.error(err))
    }
    })

  


  router.get("/all-recipes/add-to-favorite/:userId/:recipeId", async (req, res, next) => {
    
    try {
        const updatedRecipe = await userModel.findByIdAndUpdate(req.params.userId, {$push:{favorites: req.params.recipeId}}, {new: true});
        res.status(200).json(updatedRecipe);
        console.log("updated recipe", updatedRecipe);
      } catch (err) {
        next(err);
      }
  })

  router.get("/all-recipes/remove-from-favorite/:userId/:recipeId", async (req, res, next) => {
    try {
        const updatedRecipe = await userModel.findByIdAndUpdate(req.params.userId, {$pull:{favorites: req.params.recipeId}}, {new: true});
        res.status(200).json(updatedRecipe);
        console.log("updated recipe", updatedRecipe);
      } catch (err) {
        next(err);
      }
  })





module.exports = router;