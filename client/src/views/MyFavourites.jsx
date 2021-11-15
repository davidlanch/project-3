import React, { Component, useEffect, useState} from 'react';
import "./../styles/MyFavourites.css"
import { useAuth } from '../auth/UserContext';
import SimpleCard from '../components/SimpleCard';


export default function MyFavourites() {
    const { currentUser } = useAuth();
    const [FavouritesList, setList] = useState([])

    useEffect(() => {
        // const favoritesObjectId = currentUser?.favorites.populate("favorites");
        // console.log("favorite object", favoritesObjectId)
        // setList(currentUser?.favorites)
        // fetchFavorites();
      }, [currentUser]);

    return (
        <div>
        <h1>My favourites</h1>
        </div>
    )
}
