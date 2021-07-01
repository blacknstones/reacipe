import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getRecipesByQuery } from '../api/api';
import globalContext from '../globalContext';
import { Filters } from './index';

const SearchBar = () => {
  let history = useHistory();
  const { queryObj, setQueryObj, data, setData, filters, setFilters } = useContext(globalContext);
  const [searchVal, setSearchVal] = useState('');
  const [filterIsOpen, setFilterIsOpen] = useState(false);


  const handleChange = e => {
    setSearchVal(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQueryObj({ q: searchVal });
    console.log({ queryObj });
    getRecipesByQuery({ q: searchVal }).then(res => {
      console.log('in searchbar', res);
      setData(res);
    });
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
      {filters.map(el => <span>{el.webLabel}</span>)}
      <button onClick={() => setFilterIsOpen(!filterIsOpen)}>Add filter</button>

      {filterIsOpen && <Filters />}
    </div>
  );
};

export default SearchBar;
