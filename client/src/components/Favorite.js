import React, { useState, useEffect } from "react";
import APIHandler from "../api/handler";
import "./../styles/Favorite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
//import { faHeartB } from "@fortawesome/free-regular-svg-icons/faHeart";
import { useAuth } from "../auth/UserContext";

export default function Favorite(props) {
  const { currentUser, setCurrentUser } = useAuth();
  const [isFavorite, setFavorite] = useState(false);
  //const [listFavorites, setFavoritesList] = useState([]);

  useEffect(() => {
    const tmp = currentUser?.favorites.includes(props.id);
    setFavorite(tmp);
  }, [currentUser]);

  const handleClick = () => {
    if (isFavorite === true) {
      removeFromFavorite();
    } else {
      addtoFavorite();
    }
  };

  const addtoFavorite = () => {
    APIHandler.get(
      "/all-recipes/add-to-favorite/" + currentUser._id + "/" + props.id
    )
      .then((recipe) => {
        const oldFavorites = [...currentUser.favorites];

        const newFavorites = recipe.data.favorites;

        setCurrentUser({ ...currentUser, favorites: newFavorites }
        );
      })
      .catch((error) => console.error(error));
  };

  const removeFromFavorite = () => {
    APIHandler.get(
      "/all-recipes/remove-from-favorite/" + currentUser._id + "/" + props.id
    )
      .then((recipe) => {
        if (props.handler) props.handler();
        //const oldFavorites = [...currentUser.favorites];
        const newFavorites = recipe.data.favorites;
        setCurrentUser({ ...currentUser, favorites: newFavorites });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {isFavorite ? (
        <button className="isFavorite" onClick={handleClick}>
          <FontAwesomeIcon
            className="coeur-plein"
            icon={faHeart}
            size="2x"
            color="#d18110"
          />
          <i className="far fa-heart coeur-vide fa-2x"></i>
        </button>
      ) : (
        <button className="isNotFavorite" onClick={handleClick}>
          <FontAwesomeIcon
            className="coeur-plein"
            icon={faHeart}
            size="2x"
            color="#d18110"
          />
          <i className="far fa-heart coeur-vide fa-2x"></i>
        </button>
      )}
    </div>
  );
}
