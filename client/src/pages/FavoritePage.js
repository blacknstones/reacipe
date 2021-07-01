import React, { useContext, useEffect, useState } from 'react';
import { RecipeCard } from '../components';
import { getFavorites } from '../api/api';
import globalContext from '../globalContext'

const FavoritePage = () => {
    const {favorites, setFavorites} = useContext(globalContext);

    useEffect(() => {
            getFavorites().then(res => {
                console.log(res.data.favorites);
                setFavorites(res.data.favorites);
            });
    }, []);


    return (
        <div>
            favorite page
            {favorites ? favorites.map(el => <RecipeCard data={el.recipe}/>) : <p>No Favorites!</p>}
            
        </div>
    )
}

export default FavoritePage
