import React, { useContext, useEffect } from 'react';
import globalContext from '../globalContext';
import { SearchBar, Cards } from '../components';



const RecipesPage = () => {
    const { data, setData } = useContext(globalContext);

    const handleClick = () => {
        console.log('clicked');
    }

    useEffect(() => {
        console.log('in recipesPage', data);
    }, [data]);

    return (
        <div>
            <h1>Recipes Page</h1>
            <SearchBar/>
            {data ? <Cards data={data.recipes}/> : <p>Loading...</p>}
            
            <button onClick={handleClick}>Show more</button>
            
        </div>
    )
}

export default RecipesPage;
