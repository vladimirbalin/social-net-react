import React from 'react';
import './NavBar.styles.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav">
    <NavLink className="nav__item" activeClassName="nav__active" to="/profile">
      Profile
    </NavLink>
    <NavLink className="nav__item" activeClassName="nav__active" to="/dialogs">
      Messages
    </NavLink>
    <NavLink className="nav__item" activeClassName="nav__active" to="/users">
      Users
    </NavLink>
  </nav>
);

export default NavBar;
