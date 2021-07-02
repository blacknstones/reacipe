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
      <div className="search__actions">
      <form className='search__form' onSubmit={handleSubmit}>
        <input
          className='search__input'
          type='text'
          placeholder='Search for recipes...'
          name='query'
          value={searchVal}
          onChange={handleChange}
          required
        />
        <input className='search__button' type='submit' value='Search' />
      </form>

      <button
        className='filter__button-add'
        onClick={() => setFilterIsOpen(!filterIsOpen)}>
        Add filter
      </button>
      </div>
      <div className="filters-selected">
        {filters.map(el => (
        <span className="filters__item-selected">{el.webLabel ? el.webLabel : el.label}</span>
      ))}
      </div>
      
      {filterIsOpen && <Filters setOpen={setFilterIsOpen}/>}
    </div>
  );
};

export default SearchBar;
