import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getRecipesByQuery } from '../api/api';
import globalContext from '../globalContext';
import { Filters } from './index';

const makeSearchParams = (query, filters) => {
  let params = new URLSearchParams();
  params.append('q', query);

  filters.forEach(el => {
    params.append(el.type, el.label);
  });

  return params;
};

const SearchBar = () => {
  let history = useHistory();
  const { searchQuery, setSearchQuery, data, setData, filters, setFilters } =
    useContext(globalContext);
  const [searchVal, setSearchVal] = useState('');
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const handleChange = e => {
    setSearchVal(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchQuery(searchVal);
    console.log(searchQuery);

    const searchParams = makeSearchParams(searchVal, filters);

    getRecipesByQuery(searchParams).then(res => {
      console.log('in searchbar', res);
      setData(res);
    });

    setSearchVal('');
    history.push('/recipes');
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

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
      {searchQuery}
      {filters.map(el => (
        <span>{el.webLabel ? el.webLabel : el.label}</span>
      ))}
      <button onClick={() => setFilterIsOpen(!filterIsOpen)}>{filterIsOpen ? 'Hide filter' : 'Add Filter'}</button>

      {filterIsOpen && <Filters />}
    </div>
  );
};

export default SearchBar;
