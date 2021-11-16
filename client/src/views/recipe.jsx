import React, { useState, useEffect } from "react";
import NavigationArrow from "./../components/NavigationArrow";
import "./../styles/ingredients.css";
import APIHandler from "../api/handler";
import SearchIngredients from "../components/SearchIngredients";
import AllRecipes from "./AllRecipes";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/UserContext";
import Comment from "../components/Comment";

function Recipe(props) {
  const [recipe, setRecipe] = useState([]);
  const [image, setImage] = useState([]);
  
  const { currentUser } = useAuth();

  // Similar a componentDidMount y componentDidUpdate:

  useEffect(() => {
    fetchRecipes();
    
    
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await APIHandler.get("/all-recipes/" + props.match.params.id);
      setRecipe(res.data);
      
    } catch (err) {
      console.error(err);
    }
  };
  console.log("this is the", recipe);

  // const fetchImages = async () => {
  //   let arrayImages = []
  //   if (recipe.ingredients?.length !== 0) {
  //     for (let i=0; i<recipe.ingredients?.length; i++) {
  //       let url = "https://themealdb.com/images/ingredients/" + "Red%20Wine.png"
  //       arrayImages= [...arrayImages, url]
  //     }
  //   }
  //   setImage(arrayImages);
  // }

  return (
    <>
    <div>
           <Link to="./">back to all recipes</Link>
       </div>
      <div className="shadow-drop-2-center wrapper">
        <div>
          <img src={recipe.image} alt={recipe.title} />
          <h1>{recipe.title}</h1>
          <p>⭐️⭐️⭐️⭐️⭐️</p>
        </div>
        <div className="difficulties">
          <h2>{recipe.difficulty}</h2>
        </div>
        <div className="wrapper-ingredients">
          {recipe.ingredients?.map((product, i) => {
            return (
              <div key ={i} className="wrapp-ingredient shadow-drop-2-center ">
                <h3>{product}</h3>
                <img src={"https://themealdb.com/images/ingredients/" + product + ".png"} width="40px"/>
                <p>{recipe.quantities[i]}</p>
              </div>
            );
          })}
        </div>
        <div>
          <p>{recipe.instructions}</p>
        </div>
        <div>
          <h2>Comments</h2>
          <Comment userId={currentUser?._id} recipeId={props.match.params.id}/>
        </div>
      </div>
    </>
  );
}

export default Recipe;
