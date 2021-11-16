import React, { useState, useEffect } from "react";
import SearchIngredients from "./SearchIngredients";

import "./../styles/filterMenu.css";

export default function FilterMenu(props) {
  const categories = [
    "Meat",
    "Dessert",
    "Miscellaneous",
    "Pasta",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
    "Breakfast",
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="search-menu">
      <div>
        <form>
          <input
            className="search-bar"
            type="text"
            placeholder="Search by name"
            onChange={props.onNameInput}
          ></input>
        </form>
        <button onClick={toggleMenu}>
          <i className="fal fa-sliders-v"></i>
        </button>
      </div>
      {showMenu && (
        <div className="filter-menu">
          <div className="category-menu">
            <h3>Select a type of recipe</h3>
            <div className="all-categories">
              {categories.map((category) => {
                return (
                  <span key={category} className="one-category">
                    <input
                      type="checkbox"
                      onChange={(e) => props.onCategoryInput(e, category)}
                    />
                    <label>{category}</label>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="ingredients-menu">
            <h3>Manage your ingredients</h3>
            <SearchIngredients onIngredientInput={props.onIngredientInput}/>
          </div>
        </div>
      )}
    </div>
  );
}
