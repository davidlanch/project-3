import React, { useState, useEffect } from "react";
import APIHandler from "../api/handler";
import "./../styles/Favorite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../auth/UserContext";

export default function Favorite(props) {
  const { currentUser } = useAuth();
  const [isFavorite, setFavorite] = useState(false);
  // const [indexFavorite, setIndexFavorite] = useState(null);
  const [listFavorites, setFavoritesList] = useState([]);

  useEffect(() => {
    console.log(">>>>", );
    const tmp = currentUser?.favorites.includes(props.id);
    setFavorite(tmp)
    // fetchFavorites();
  }, [currentUser]);

  const handleClick = () => {
    if (isFavorite === true) {
      removeFromFavorite();
      console.log("user id", currentUser._id, "recipe id", props.id)
      
    } else {
      addtoFavorite();
      setFavorite(!isFavorite)
      console.log("user id", currentUser._id, "recipe id", props.id)
    }

  }

  const addtoFavorite = () => {
    APIHandler.get("/all-recipes/add-to-favorite/" + currentUser._id + "/" + props.id)
    .then((ok) => setFavorite(!isFavorite))
    .catch ((error) => console.error(error))
  }

  const removeFromFavorite = () => {
    APIHandler.get("/all-recipes/remove-from-favorite/" + currentUser._id + "/" + props.id)
    .then((ok) => setFavorite(!isFavorite))
    .catch ((error) => console.error(error))
  }

  return (
    <div>
      {isFavorite ? <button onClick= {handleClick}>enlever des favoris</button> : <button onClick= {handleClick}>ajouter aux favoris</button>}
    </div>

  );
}
