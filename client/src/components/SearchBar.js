import React, { useState } from 'react';
import { getRecipesByQuery } from '../api/api';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
   console.log(getRecipesByQuery({q: query}));
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Find your taste...'
          name='query'
          value={query}
          onChange={handleChange}
          required
        />
        <input type='submit' value='Search' />
      </form>
    </div>
  );
};

export default SearchBar;
