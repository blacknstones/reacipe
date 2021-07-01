import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../api/api';
import globalContext from '../globalContext';

const DetailPage = () => {
  const [currentRecipe, setCurrentRecipe] = useState();
  const { data } = useContext(globalContext);
  const { id } = useParams();

  if (data !== null) {
    const recipeData = data.recipes.filter(el => el.recipe.uri.includes(id))[0];
    const recipe = recipeData.recipe;
    setCurrentRecipe(recipe);
  }

  useEffect(() => {
    if (!currentRecipe) {
      getRecipeById(id).then(res => setCurrentRecipe(res.recipe));
    }
  }, [currentRecipe]);

  return (
    <div>
      <h1>Detail Page</h1>

      {currentRecipe !== undefined ? (
        <div>
          <h2>{currentRecipe.label}</h2>
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
