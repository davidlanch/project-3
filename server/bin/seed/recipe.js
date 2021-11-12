require("dotenv").config();
require("./../../config/mongo"); // fetch the db connection
const APIHandler = require("./../../config/APIHandler")

const RecipeModel = require("./../../model/Recipe");

async function fetchRecipes(numberOfRecipes) {
  try {
    //await RecipeModel.deleteMany(); // empty collection
    const allRecipes = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    // Here we will require from the API the desired number of recipes, one by one
    alphabet.forEach((letter) => {

        // Getting one recipe
        const randomAPIRecipe = await APIHandler.get("random.php");

        // testing whether I already got this 

        // Formatting the recipe - many steps to this one -------------------------

        // 1 - Formatting the category 
        const allMeats = ["Goat", "Beef", "Pork", "Chicken", "Lamb"];
        let formattedCategory
        if (allMeats.includes(randomAPIRecipe.strCategory)) {
            formattedCategory = "Meat"
        } else {
            formattedCategory = randomAPIRecipe.strCategory
        }
        
        // Formatting the ingredients

        for (let j = 0; j < 20; j++)

        const formattedRecipe = {
            title: randomAPIRecipe.strMeal,
            instructions: randomAPIRecipe.strInstructions,
            image: randomAPIRecipe.strMealThumb,
        }

        // Adding the formatted Recipe to the array that we want to 
        randomRecipes.push()
    })

    const artists = await Promise.all([
      ArtistModel.findOne({ name: "wu tang clan" }),
      ArtistModel.findOne({ name: "aphex twin" }),
      ArtistModel.findOne({ name: "bad brains" }),
    ]);

    

    const inserted = await AlbumModel.insertMany(albums); // insert docs in db
    console.log(`seed albums done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

async function insertRecipes(recipes) {

}

insertRecipes(fetchRecipes(100))