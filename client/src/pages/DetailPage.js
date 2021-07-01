import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addToFavorites, getRecipeById, removeFromFavorites } from '../api/api';
import globalContext from '../globalContext';

const getFavoriteStatus = (favorites, id) => {
  return favorites.find(el => el.id === id) ? true : false;
};

const DetailPage = () => {
  const { id } = useParams();

  const { data, favorites, setFavorites } = useContext(globalContext);
  const [currentRecipe, setCurrentRecipe] = useState();
  const [isFavorite, setIsFavorite] = useState(
    getFavoriteStatus(favorites, id)
  );

  const handleClick = () => {
    getFavoriteStatus(favorites, id);
    if (!isFavorite) {
      addToFavorites({ id, recipe: currentRecipe });
    } else {
      removeFromFavorites(id);
    }
  };

  useEffect(() => {
    console.log('in detail page', data);

    if (data) {
      const recipeData = data.recipes.filter(el =>
        el.recipe.uri.includes(id)
      )[0];

      if (recipeData) {
        console.log('There is something here...');
        const recipe = recipeData.recipe;
        setCurrentRecipe(recipe);
      } else {
        console.log('fetching');
        getRecipeById(id).then(res => setCurrentRecipe(res.recipe));
      }
    }
  }, []);

  return (
    <div>
      <h1>Detail Page</h1>
      {currentRecipe ? (
        <div>
          <h2>{currentRecipe.label}</h2>
          <button onClick={handleClick}>{isFavorite ? 'Remove from Favorites' : 'Add to favorites'}</button>
          <br />
          <img src={currentRecipe.image} alt={currentRecipe.label} />
          <div>
            <p>Ingredients:</p>
            {currentRecipe.ingredientLines.map(el => (
              <p>{el}</p>
            ))}
          </div>
        </div>
      ) : (
        <p>Recipe not found!</p>
      )}
    </div>
  );
};

export default DetailPage;
