require("dotenv").config();
<<<<<<< HEAD
require("./../../config/mongo"); // fetch the db connectionz
=======
>>>>>>> f716ecd59621f7d97146a2d79fd51bbbf7f76771
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