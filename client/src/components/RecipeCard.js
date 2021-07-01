import React,{ useEffect }  from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ data }) => {
    const recipeId = data.uri.split('_')[1];
    //const parsedPath = data.label.toLowerCase().split(/\s/).join('-');
    console.log(recipeId);

    return (
        <div className="recipe-card">
            <Link to={`/recipes/${recipeId}`}>
             <img src={data.image} alt={data.label}/>
            <p>{data.label}</p>
            <span>{`${data.calories} Calories`}</span>
            <span>{`${data.ingredients.length} Ingredients`}</span>
            </Link>    
        </div>
    )
}

export default RecipeCard;
