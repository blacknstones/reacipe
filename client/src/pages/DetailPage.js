import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import globalContext from '../globalContext';

const DetailPage = () => {
    const { data } = useContext(globalContext);
    const { id } = useParams();

    const recipeData = data.recipes.filter(el=> el.recipe.uri.includes(id))[0];
    const recipe = recipeData.recipe;
    console.log(recipe);

    return (
        <div>
            <h1>Detail Page</h1>
            <h2>{recipe.label}</h2>
            <img src={recipe.image}/>
            <div>
                <p>Ingredients:</p>
            {recipe.ingredientLines.map(el => <p>{el}</p>)}

            </div>
            
        </div>
    )
}

export default DetailPage;
