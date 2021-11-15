import React from 'react'
import SearchIngredients from "./../components/SearchIngredients.jsx"

export default function Home() {

    return (
        <>
            <img src="title-bon-app.png" alt="BonApp" />
            <p>Add your ingredients!</p>
            <SearchIngredients />
            <div className="fridge"></div>
        </>
    )
}
