import React, { useContext, useEffect } from 'react';
import globalContext from '../globalContext';
import { SearchBar, Cards } from '../components';
import { getNextPage } from '../api/api';

const RecipesPage = () => {
  const { data, setData } = useContext(globalContext);

  const handleClick = () => {
    getNextPage(data.next).then(res => {
      console.log('in client: next page', res);
      setData({
        recipes: [...data.recipes, ...res.recipes],
        next: res.next,
      });
    });
  };

  useEffect(() => {
    console.log('in recipesPage', data);
  }, [data]);

  return (
    <div>
      <h1>Recipes Page</h1>
      <SearchBar />
      {data ? 
      <div>
        <Cards data={data.recipes} /> 
        <button onClick={handleClick}>Show more</button>
      </div>
      : 
      <p>Loading...</p>}

    </div>
  );
};

export default RecipesPage;
