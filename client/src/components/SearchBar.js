import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getRecipesByQuery } from '../api/api';
import globalContext from '../globalContext';


const SearchBar = () => {
  let history = useHistory();
  const{ queryObj, setQueryObj, data, setData } = useContext(globalContext);
  const [searchVal, setSearchVal] = useState('');

  const handleChange = e => {
    setSearchVal(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQueryObj({q: searchVal});
    console.log({queryObj});
    getRecipesByQuery({q: searchVal}).then(res => setData(res));
    console.log('data: ', data);
    setSearchVal('');
    history.push('/recipes');

  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Find your taste...'
          name='query'
          value={searchVal}
          onChange={handleChange}
          required
        />
        <input type='submit' value='Search' />
      </form>
    </div>
  );
};

export default SearchBar;
