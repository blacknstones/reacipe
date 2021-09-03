import React, { useContext } from 'react';
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

  return (
    <div className="recipes-page">
      
      <SearchBar />
      {data && data.recipes ? 
      <div className="recipes__container">
        <Cards data={data.recipes} /> 
        <button className="show__button" onClick={handleClick}>Show more</button>
      </div>
      :
      <p>{data && data.error ? "Seems like there's no recipe to show. Try to search something else!" : "Loading..."}</p>}

    </div>
  );
};

export default RecipesPage;
