import React, { useState, useEffect } from "react";
import APIHandler from "../api/handler";
import "./../styles/Favorite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {faHeartB} from "@fortawesome/free-regular-svg-icons/faHeart";
import { useAuth } from "../auth/UserContext";


export default function Favorite(props) {
  const { currentUser, setCurrentUser } = useAuth();
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
      // setFavorite(!isFavorite, () => this.handler.props())  
    } else {
      addtoFavorite();
      // setFavorite(!isFavorite, () => this.handler.props())   
     }

  }



  const addtoFavorite = () => {
    APIHandler.get("/all-recipes/add-to-favorite/" + currentUser._id + "/" + props.id)
    .then((recipe) => {
      const oldFavorites = [...currentUser.favorites]
      console.log("RECIPE HERE", recipe.data.favorites)
      const newFavorites = recipe.data.favorites
      console.log("olf favorites", oldFavorites)
      console.log("new favorites", newFavorites)
      console.log("current user", currentUser)
      setCurrentUser({...currentUser, favorites: newFavorites}, () => console.log("NEEEW", currentUser))

    })
    .catch ((error) => console.error(error))
  }

  const removeFromFavorite = () => {
    APIHandler.get("/all-recipes/remove-from-favorite/" + currentUser._id + "/" + props.id)
    .then((recipe) => {
      if (props.handler) props.handler();
      const oldFavorites = [...currentUser.favorites]
      console.log("RECIPE HERE", recipe.data.favorites)
      const newFavorites = recipe.data.favorites
      console.log("olf favorites", oldFavorites)
      console.log("new favorites", newFavorites)
      console.log("current user", currentUser)
      setCurrentUser({...currentUser, favorites: newFavorites}, () => console.log("NEEEW", currentUser))

    })
    .catch ((error) => console.error(error))
  }

  return (
    <div>
      {isFavorite ? <button className="isFavorite" onClick={handleClick}><FontAwesomeIcon className="coeur-plein" icon={faHeart} size="2x" color="grey"/><i className="far fa-heart coeur-vide fa-2x"></i></button> : <button className= "isNotFavorite" onClick= {handleClick}><FontAwesomeIcon className="coeur-plein" icon={faHeart} /><i className="far fa-heart coeur-vide"></i></button>}
    </div>

  );
}
