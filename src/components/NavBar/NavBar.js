import React from "react";
import './NavBar.styles.scss';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='nav'>
      <NavLink className='nav__item' activeClassName='nav__active' to="/profile">Profile</NavLink>
      <NavLink className='nav__item' activeClassName='nav__active' to="/dialogs">Messages</NavLink>
      <NavLink className='nav__item' activeClassName='nav__active' to="/users">Users</NavLink>
      <NavLink className='nav__item' activeClassName='nav__active' to="/news">News</NavLink>
      <NavLink className='nav__item' activeClassName='nav__active' to="/music">Music</NavLink>
      <NavLink className='nav__item' activeClassName='nav__active' to="/settings">Settings</NavLink>
    </nav>
  );
};

export default NavBar;