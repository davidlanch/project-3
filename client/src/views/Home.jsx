import React, { useState } from 'react'
import SearchIngredients from "./../components/SearchIngredients.jsx";
import './../styles/Home.css';

export default function Home(props) {

    const [ingredients, setIngredients] = useState([])

    const findYourRecipe = () => {
       props.history.push({pathname: "/all-recipes", search: new URLSearchParams({ingredients: ingredients}).toString()})
    }

    const onHomeIngredientInput = (newIngredients) => {
        setIngredients(newIngredients)
    }

    return (
        <div className="main-home">
            <div className="left-home">
                <img className="logo-home" src="title-bon-app.png" alt="BonApp" />
                <p>Add your ingredients</p>
                <SearchIngredients onIngredientInput={onHomeIngredientInput}/>
                <button className="find-recipe-btn" onClick={findYourRecipe}>Find your recipe</button>
            </div>
            <img className="fridge" src="openingFridge.gif" alt="fridge opening" />
        </div>
    )
}
