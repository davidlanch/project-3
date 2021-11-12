require("dotenv").config();
require("./../../config/mongo"); // fetch the db connection
const APIHandler = require("./../../api/APIHandler")

const RecipeModel = require("./../../model/recipes");


// TO DO: add user API Meal to all seed recipes


const fetchRecipes = () => {
    //await RecipeModel.deleteMany(); // empty collection
    const allRecipes = [];
    //const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const alphabet = ["a"];

    // Here we will require from the API all the recipes which name starts with the letter "a", then "b", etc
    alphabet.forEach(async (letter) => {
        try {
        // Getting an array or recipes starting with that letter
        const recipes = await APIHandler.get("search.php?f=" + letter);
        //const recipes = await APIHandler.get("random.php");

        console.log("this is what the API gives us: ", recipes)
        recipes.data.meals.forEach((recipe) => {
          // Formatting the recipe - many steps to this one -------------------------

          // 1 - Formatting the category 
          const allMeats = ["Goat", "Beef", "Pork", "Chicken", "Lamb"];
          let formattedCategory
          if (allMeats.includes(recipe.strCategory)) {
              formattedCategory = "Meat";
          } else {
              formattedCategory = recipe.strCategory;
          }
          
          // Formatting the ingredients

          let counter = 1;
          let allIngredients =[]; let ingredient;
          let allQuantities = []; let quantity;
          do {
            ingredient = meal["strIngredient" + String(counter)]
            quantity = meal["strMeasure" + String(counter)]
            allIngredients.push(ingredient);
            allQuantities.push(quantity);
            counter += 1;
          }
          while (
            counter <= 20 && ingredient.length
          )

          const formattedRecipe = {
              title: recipe.strMeal,
              instructions: recipe.strInstructions,
              image: recipe.strMealThumb,
              ingredients: allIngredients,
              quantities: allQuantities
          }
          //console.log(formattedRecipe)

          // Adding the formatted Recipe to the array of recipes
          allRecipes.push(formattedRecipe)
        })

        } catch (err) {
          console.error(err);
        }
      })
};

async function insertRecipes(recipes) {
  try {
    const inserted = await RecipeModel.insertMany(recipes); // insert docs in db
    console.log(`seed recipes done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {console.error(err)}
}

insertRecipes(fetchRecipes())