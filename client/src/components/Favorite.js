import React, { useState, useEffect } from "react";
import APIHandler from "../api/handler";
import "./../styles/Favorite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import faHeartB from "@fortawesome/free-regular-svg-icons/faHeart";
import { useAuth } from "../auth/UserContext";


export default function Favorite(props) {
  const { currentUser } = useAuth();
  const [isFavorite, setFavorite] = useState(false);
  const [listFavorites, setFavoritesList] = useState([]);

  useEffect(() => {
    const tmp = currentUser?.favorites.includes(props.id);
    setFavorite(tmp)
    console.log("PROPS", props.id, "is favorite", isFavorite, "list Favorites", currentUser.favorites)

  }, [currentUser]);

  const handleClick = () => {
    if (isFavorite === true) {
      removeFromFavorite();
      setFavorite(!isFavorite);
    } else {
      addtoFavorite();
      setFavorite(!isFavorite)    }

  }

  const addtoFavorite = () => {
    APIHandler.get("/all-recipes/add-to-favorite/" + currentUser._id + "/" + props.id)
    .then((ok) => {
      setFavorite(!isFavorite)
    })
    .catch ((error) => console.error(error))
  }

  const removeFromFavorite = () => {
    APIHandler.get("/all-recipes/remove-from-favorite/" + currentUser._id + "/" + props.id)
    .then((ok) => {
      if (props.handler) props.handler();
    })
    .catch ((error) => console.error(error))
  }

  return (
    <div>
      {isFavorite ? <button onClick={handleClick}><FontAwesomeIcon icon={faHeart} /></button> : <button onClick= {handleClick}><i className="far fa-heart"></i></button>}
    </div>

  );
}
