import React, { Component } from "react";
import "./../styles/MyRecipes.css";
import "./../styles/MyRecipes.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import SimpleCard from "../components/SimpleCard";
export default class MyRecipes extends Component {
  handleDelete = () => {};

  handleEdit = () => {};

  render() {
    return (
      <div className="my-recipes">
        <h1>My recipes</h1>
        <div>
          <SimpleCard />
          <FontAwesomeIcon icon={faEdit} onClick={handleDelete} />
          <FontAwesomeIcon icon={faTrash} onClick={handleEdit} />
        </div>
      </div>
    );
  }
}
