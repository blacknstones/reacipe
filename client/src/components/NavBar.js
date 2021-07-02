import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link className='nav-link' to='/'>
        Home
      </Link>
      <Link className='nav-link' to='/recipes'>
        Recipes
      </Link>
      <Link className='nav-link' to='/favorites'>
        Favorites
      </Link>
    </nav>
  );
};

export default NavBar;
