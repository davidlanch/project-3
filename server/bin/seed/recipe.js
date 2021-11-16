require("dotenv").config();
require("./../../config/mongo"); // fetch the db connection

const APIHandler = require("./../../api/APIHandler");

const RecipeModel = require("./../../model/recipes");
const UserModel = require("./../../model/users");

// TO DO: add user API Meal to all seed recipes

const fetchRecipes = () => {
  return new Promise(async (resolve, reject) => {
    await RecipeModel.deleteMany();
    const allRecipes = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    // Here we will require from the API all the recipes starting with the letter "a", then "b", etc
    for (let letter of alphabet) {
      try {
        // Getting  array or recipes starting with that letter
        const recipes = await APIHandler.get("search.php?f=" + letter);
        //const recipes = await APIHandler.get("random.php");
        if (recipes.data.meals)
        for (let recipe of recipes.data.meals) {
          // Formatting the recipe - many steps to this one -------------------------

          // 1 - Formatting the category
          const allMeats = ["Goat", "Beef", "Pork", "Chicken", "Lamb"];
          let formattedCategory;
          if (allMeats.includes(recipe.strCategory)) {
            formattedCategory = "Meat";
          } else {
            formattedCategory = recipe.strCategory;
          }

          //  2 - Formatting the ingredients and quantities
          let counter = 1;
          let allIngredients = [];
          let ingredient = recipe["strIngredient" + "1"];
          let allQuantities = [];
          let quantity = recipe["strMeasure" + "1"];
          while (counter <= 20 && ingredient?.length) {
            allIngredients.push(ingredient);
            allQuantities.push(quantity);
            counter += 1;
            ingredient = recipe["strIngredient" + String(counter)];
            quantity = recipe["strMeasure" + String(counter)];
          } 

          // 3 - Formatting the author

          const APIuser = await UserModel.findOne({username: "TheMealDb"});
          console.log(APIuser)
          // Completing the formatted recipe
          const formattedRecipe = {
            title: recipe.strMeal,
            instructions: recipe.strInstructions,
            image: recipe.strMealThumb,
            ingredients: allIngredients,
            quantities: allQuantities,
            author: APIuser._id,
            category: formattedCategory
          };

          // Adding the formatted Recipe to the array of recipes
          allRecipes.push(formattedRecipe);
        };
      } catch (err) {
        reject(err);
      }
    } resolve(allRecipes);
  });
};

async function insertRecipes(recipes) {
  try {
    const inserted = await RecipeModel.insertMany(recipes); // insert docs in db
    console.log(`seed recipes done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

fetchRecipes().then(insertRecipes);

