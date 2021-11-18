import React, { useState, useEffect } from "react";
import NavigationArrow from "./../components/NavigationArrow";
import "./../styles/ingredients.css";
import APIHandler from "../api/handler";
import SearchIngredients from "../components/SearchIngredients";
import AllRecipes from "./AllRecipes";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/UserContext";
import Comment from "../components/Comment";
import StarReating from "../components/ratingStars"
import { library } from "@fortawesome/fontawesome-svg-core";


function Recipe(props) {
  const [recipe, setRecipe] = useState([]);
  const [image, setImage] = useState([]);
  const steps = new RegExp(/[0-9]+\./, 'g');
  const noSteps = new RegExp(/\.\s/, 'g');
  
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

  return (
    <>
      {props.location.state?.showLinks && <div className="back-links-container">
           <Link to="./" className="back-links">Back to all recipes</Link>
           <Link to={{pathname: "/all-recipes", searchFromOneRecipe: props.location.state}} className="back-links">Back to my search</Link>
      </div>}
      <div className="shadow-drop-2-center wrapper">
        <div>
          <img src={recipe.image} alt={recipe.title} />
          <h1>{recipe.title}</h1>
          <StarReating infoRecipe={props}/>
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
        <div className="instructions-list">
          {steps.test(recipe.instructions)}
          <ul>
            {
              steps.test(recipe.instructions) ? 
              recipe.instructions?.split(steps).map((instruction) => <li>{instruction}</li>) :
              recipe.instructions?.split(noSteps).map((instruction) => <li>{instruction}</li>)
            }
          </ul>
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
