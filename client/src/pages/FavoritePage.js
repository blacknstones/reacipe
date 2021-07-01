import React, { useContext, useEffect, useState } from 'react';
import { RecipeCard } from '../components';
import { getFavorites } from '../api/api';
import globalContext from '../globalContext'

const FavoritePage = () => {
    const {favorites, setFavorites} = useContext(globalContext);

    useEffect(() => {
            getFavorites().then(res => {
                setFavorites(res.data.favorites);
            });
    }, []);


    return (
        <div className="favorites-page">
            <h1>Your Favorites</h1>
            {favorites ? <div className="cards">{favorites.map(el => <RecipeCard data={el.recipe}/>)}</div> : <p>No Favorites!</p>}
            
        </div>
    )
}

export default FavoritePage
