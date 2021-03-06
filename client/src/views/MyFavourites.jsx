import React, { Component, useEffect, useState } from "react";
import "./../styles/MyFavourites.css";
import { useAuth } from "../auth/UserContext";
import SimpleCard from "../components/SimpleCard";
import APIHandler from "../api/handler";
import { Link } from "react-router-dom";

export default function MyFavourites() {
  const { currentUser } = useAuth();
  const [FavouritesList, setList] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, [currentUser]);

  const fetchFavorites = () => {
    APIHandler.get("/" + currentUser?._id)
      .then((user) => {
        setList(user.data.favorites);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>My favourites</h1>

      {FavouritesList.length === 0 && (
        <div className="text">
          {" "}
          You don't have any favourites yet. <Link to="/all-recipes" className="link-recipe">Add one !</Link>
        </div>
      )}
      <div className="list-favorites">
        {FavouritesList.map((element) => {
          return (
            <div key={element._id} className="all-recipes">
              <SimpleCard
                showLinks={false}
                recipe={element}
                handler={fetchFavorites}
              ></SimpleCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
