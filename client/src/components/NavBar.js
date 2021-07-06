import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link className='nav-link' to='/'>
        HOME
      </Link>
      <Link className='nav-link' to='/recipes'>
        RECIPES
      </Link>
      <Link className='nav-link' to='/favorites'>
        FAVORITES
      </Link>
    </nav>
  );
};

export default NavBar;
