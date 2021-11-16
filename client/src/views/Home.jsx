import React from 'react'
import SearchIngredients from "./../components/SearchIngredients.jsx"

export default function Home(props) {

    const findYourRecipe = () => {
        props.history.push("/all-recipes")
    }

    const onHomeIngredientInput = () => {

    }

    return (
        <>
            <img src="title-bon-app.png" alt="BonApp" />
            <p>Add your ingredients!</p>
            <SearchIngredients onIngredientInput={onHomeIngredientInput}/>
            <button onClick={findYourRecipe}>Find your recipe</button>
            <div className="fridge"></div>
        </>
    )
}
