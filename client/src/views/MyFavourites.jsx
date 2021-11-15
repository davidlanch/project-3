import React, { Component, useEffect, useState} from 'react';
import "./../styles/MyFavourites.css"
import { useAuth } from '../auth/UserContext';
import SimpleCard from '../components/SimpleCard';
import APIHandler from '../api/handler';


export default function MyFavourites() {
    const { currentUser } = useAuth();
    const [FavouritesList, setList] = useState([])

    useEffect(() => {
        // const favoritesObjectId = currentUser?.favorites.populate("favorites");
        // console.log("favorite object", favoritesObjectId)
        // setList(currentUser?.favorites)
        fetchFavorites();

      }, [currentUser]);

    const fetchFavorites = () => {
        APIHandler.get("/" + currentUser?._id)
        .then((user) => {
            console.log("USER", user.data.favorites)
            setList(user.data.favorites)
        })
        .catch((error) => console.error(error))
    }

    return (
        <div>
        <h1>My favourites</h1>
        {FavouritesList.map((element) => {
            return (
            <div key={element._id} className="all-recipes">
              <SimpleCard recipe={element} ></SimpleCard>
              </div>
            )
        })}
        </div>
        )
}

