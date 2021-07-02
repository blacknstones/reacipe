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
    const status = !isFavorite;
    setIsFavorite(status);
    if (status) {
      addToFavorites({ id, recipe: currentRecipe }).then(res =>
        setFavorites(res)
      );
    } else {
      removeFromFavorites(id).then(res => setFavorites(res));
    }
  };

  useEffect(() => {
    console.log('in detail page', currentRecipe);

    if (data) {
      const recipeData = data.recipes.filter(el =>
        el.recipe.uri.includes(id)
      )[0];

      if (recipeData) {
        const recipe = recipeData.recipe;
        setCurrentRecipe(recipe);
      } else {
        console.log('fetching');
        getRecipeById(id).then(res => setCurrentRecipe(res.recipe));
      }
    }
  }, []);

  return (
    <div className='detail-page'>
      {currentRecipe ? (
        <div className='recipe__detail'>
          <div className='recipe__detail__group' id='group-1'>
            <h1 className='recipe__detail__name'>{currentRecipe.label}</h1>
            <div className='recipe-favorite'>
              <button className='favorite__button' onClick={handleClick}>
                {isFavorite ? (
                  <i className='fas fa-heart'></i>
                ) : (
                  <i className='far fa-heart'></i>
                )}
              </button>
              <p className='favorite__button-tag'>
                {isFavorite ? 'Remove from Favorites' : 'Add to favorites'}
              </p>
            </div>
          </div>

          <div className='recipe__detail__group' id='group-2'>
            <img
              className='recipe__detail__image'
              src={currentRecipe.image}
              alt={currentRecipe.label}
            />
            <div className='recipe__detail__tags'>
              <div className='recipe__detail__tags__group'>
                <span className='recipe__detail__tags__item'>
                  <span className='tag-hightlight'>
                    {Math.floor(currentRecipe.calories)}
                  </span>
                  <span> Calories in total</span>
                </span>

                <span className='recipe__detail__tags__item'>
                  <span className='tag-hightlight'>{currentRecipe.yield}</span>
                  <span> Servings</span>
                </span>
              </div>

              <div className='recipe__detail__tags__group'>
                <span className='recipe__detail__tags__item'>
                  <span className='tag-hightlight'>
                    {Math.floor(currentRecipe.calories / currentRecipe.yield)}
                  </span>
                  <span> Calories per serving</span>
                </span>
              </div>

              <div className='recipe__detail__tags__group' id='group-3'>
                {currentRecipe.dietLabels.map(el => (
                  <div className='tag-name' key={el.index}>
                    {el}
                  </div>
                ))}
                {currentRecipe.healthLabels.map(el => (
                  <div className='tag-name' key={el.index}>
                    {el}
                  </div>
                ))}
              </div>

              <div className='recipe__detail__tags__group'>
                

    
                <span className='tag-type'>{currentRecipe.cuisineType ? currentRecipe.cuisineType : 'Delish'}</span>
                <span className='tag-type'>{currentRecipe.dishType ? currentRecipe.dishType : 'Meal'}</span>
                <span className='tag-type'>{currentRecipe.mealType ? currentRecipe.mealType : 'For the day'}</span>
              </div>
            </div>
          </div>

          <div className='recipe__detail__group' id='group-3'>
            <h2>Preparation</h2>
            <div className="preparation">
              <div className='ingredients'>
                <div className='recipe__detail__tags__group'>
                  <span className='recipe__detail__tags__item'>
                    <span className='tag-hightlight'>
                      {currentRecipe.ingredients.length}
                    </span>

                    <span> Ingredients</span>
                  </span>
                </div>

                {currentRecipe.ingredientLines.map(el => (
                  <p>{el}</p>
                ))}
              </div>

              <div className='instruction'>

                <div className='recipe__detail__tags__group'>
                  <span className='recipe__detail__tags__item'>
                    <span className='tag-hightlight'>
                      {currentRecipe.totalTime}
                    </span>
                    <span> Minutes</span>
                  </span>
                </div>

                <div>
                  <p>See full instructions at:</p>
                  <a className="instruction-link" href={currentRecipe.url} target="_blank">{currentRecipe.source}</a>
                </div>






              </div>
            </div>
          </div>

        </div>
      ) : (
        <p>Recipe not found!</p>
      )}
    </div>
  );
};

export default DetailPage;
