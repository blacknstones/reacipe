import React, { useContext, useEffect } from 'react';
import globalContext from '../globalContext';
import { SearchBar, Cards } from '../components';
import { getNextPage } from '../api/api';

const RecipesPage = () => {
  const { data, setData } = useContext(globalContext);

  const handleClick = () => {
    getNextPage(data.next).then(res => {
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
    <div className="recipes-page">
      
      <SearchBar />
      {data ? 
      <div className="recipes__container">
        <Cards data={data.recipes} /> 
        <button className="show__button" onClick={handleClick}>Show more</button>
      </div>
      : 
      <p>Loading...</p>}

    </div>
  );
};

export default RecipesPage;
