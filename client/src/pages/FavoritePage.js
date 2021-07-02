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
            <h1 className="favorites__page__title">Your Favorites</h1>
            <div className="favorites__container">
            {favorites ? <div className="cards">{favorites.map(el => <RecipeCard data={el.recipe}/>)}</div> : <p>No Favorites!</p>}

            </div>
            
        </div>
    )
}

export default FavoritePage
