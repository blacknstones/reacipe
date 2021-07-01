import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ data }) => {
  const recipeId = data.uri.split('_')[1];
  //const parsedPath = data.label.toLowerCase().split(/\s/).join('-');

  return (
    <div className='recipe__card'>
      <Link to={`/recipes/${recipeId}`}>
          <div className="recipe__card__content">
               <img className='recipe__card__img' src={data.image} alt={data.label} />
        <p className='recipe__card__name'>{data.label}</p>
        <div className="recipe__card__tag">
          <span className="recipe__card__tag__item">{`${Math.floor(data.calories)} Calories`}</span>
          <span className="recipe__card__tag__item">{`${data.ingredients.length} Ingredients`}</span>
        </div>
          </div>
       
      </Link>
    </div>
  );
};

export default RecipeCard;
