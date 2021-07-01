import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/recipes'>Recipes</Link>
      <Link to='/favorites'>Favorites</Link>
    </nav>
  );
};

export default NavBar;
