import React from "react";
import s from './NavBar.module.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={s.item} activeClassName={s.active} to="/profile">Profile</NavLink>
      <NavLink className={s.item} activeClassName={s.active} to="/dialogs">Messages</NavLink>
      <NavLink className={s.item} activeClassName={s.active} to="/news">News</NavLink>
      <NavLink className={s.item} activeClassName={s.active} to="/music">Music</NavLink>
      <NavLink className={s.item} activeClassName={s.active} to="/settings">Settings</NavLink>
    </nav>
  );
};

export default NavBar;