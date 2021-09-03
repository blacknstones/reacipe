import React, { useContext, useEffect } from 'react';
import { RecipeCard } from '../components';
import globalContext from '../globalContext';
import { getFavorites } from '../api/api';

const FavoritePage = () => {
  const { favorites, setFavorites } = useContext(globalContext);

  useEffect(() => {
    getFavorites().then(res => {
      setFavorites(res.data.favorites);
    });
  }, [setFavorites]);


  return (
    <div className='favorites-page'>
      <h1 className='favorites__page__title'>Your Favorites</h1>
      <div className='favorites__container'>
        {favorites ? (
          <div className='cards'>
            {favorites.map(el => (
              <RecipeCard data={el.recipe} />
            ))}
          </div>
        ) : (
          <p className='message'>No Favorites!</p>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
