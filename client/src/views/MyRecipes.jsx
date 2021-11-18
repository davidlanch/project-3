import React, { useState, useEffect } from "react";

import "./../styles/MyRecipes.css";
import "./../styles/MyRecipes.css";
import { Link } from "react-router-dom";
import APIHandler from "../api/handler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import SimpleCard from "../components/SimpleCard";
import { useAuth } from "./../auth/UserContext";

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([]); // i need a state
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchRecipes();
    // fetch uniquement quand la valeur de currentUser change (cad passe de null à object dans ce cas)
  }, [currentUser]);

  const fetchRecipes = async () => {
    try {
      const res = await APIHandler.get("/my-recipes/" + currentUser._id);
      console.log("api res => ", res);
      setRecipes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await APIHandler.delete(`/my-recipes/${id}`);
      fetchRecipes();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = async (id) => {
    try {
      await APIHandler.get(`/my-recipes/${id}/edit`);
      fetchRecipes();
      this.props.history.push(`/my-recipes/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    // if (!this.state.recipes) return <div>loading</div>

    <div className="my-recipes">
      <h1>My recipes</h1>
      {recipes.length === 0 && (
        <div className="text">
          {" "}
          You don't have any recipes yet. Add a recipe !
        </div>
      )}
      <Link to={"/profile/my-recipes/create"} className="container">
        <button className="ingredient-add-button">
          <i className="fas fa-plus-circle"></i>{" "}
        </button>
      </Link>
<div className="list-my-recipes">
      {recipes.map((element) => {
        return (
          <div key={element._id} className="all-recipes">
            <SimpleCard showLinks={false} recipe={element}></SimpleCard>
            <div >
              <Link to={"/profile/my-recipes/update/" + element._id}>
                <FontAwesomeIcon
                  icon={faEdit}
                  className="edit"
                  style={{ cursor: "pointer" }}
                 
                  onClick={() => handleEdit(element._id)}
                />
              </Link>
              <FontAwesomeIcon
                icon={faTrash}
                className="trash"
                style={{ cursor: "pointer" }}
               
                onClick={() => handleDelete(element._id)}
              />
            </div>
          </div>
          
        );
      })}
    </div>
    </div>
  );
}
