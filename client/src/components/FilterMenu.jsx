import React, { useState, useEffect } from "react";
import SearchIngredients from "./SearchIngredients";
import { Link } from "react-router-dom";

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

  let booleansForCheckbox = categories.map((category) =>
    props.state?.categoryFilter.includes(category)
  );

  useEffect(() => {
    booleansForCheckbox = categories.map((category) =>
      props.state?.categoryFilter.includes(category)
    );
  });

  return (
    <div className="search-menu">
      <div className="search-bar-with-btn">
        <form>
          <input
            className="search-bar"
            type="text"
            placeholder="Search by name"
            onChange={props.onNameInput}
            value={props.state.nameFilter}
          ></input>
        </form>
        <button className="filter-btn" onClick={toggleMenu}>
          <i className="fal fa-sliders-v"></i>
        </button>
      </div>
      {showMenu && (
        <div className="filter-menu">
          <div className="category-menu">
            <h3>Categories</h3>
            <div className="all-categories">
              {categories.map((category, index) => {
                return (
                  <span key={category} className="one-category">
                    <input
                      checked={booleansForCheckbox[index]}
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
            <h3>Ingredients</h3>
            <SearchIngredients
              onIngredientInput={props.onIngredientInput}
              ingredientsFromHome={props.ingredientsFromHome}
              ingredientsFromState={props.state.ingredientsFilter}
            />
          </div>
        </div>
      )}
      {showMenu && (
        <Link
          to={{ pathname: "/all-recipes", reset: true }}
          className="filter-btn"
        >
          <i className="fas fa-redo"></i>
        </Link>
      )}
      {/* this condition on Link seems idiotic but it's better this way for styling */}
    </div>
  );
}