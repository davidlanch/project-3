require("dotenv").config();
require("./../../config/mongo"); // fetch the db connection
const APIHandler = require("./../../api/APIHandler")

const RecipeModel = require("./../../model/recipes");


const fetchRecipes = async () => {

        try {
        // Getting an array or recipes starting with that letter
        const recipe = await APIHandler.get("random.php");
        console.log(recipe.data)
        } catch (err) {
          console.error(err.message);
        }
};

fetchRecipes()