import React from "react";
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <a className={s.item} href="#">Profile</a>
      <a className={`${s.item} ${s.active}`} href="#">Messages</a>
      <a className={s.item}  href="#">News</a>
      <a className={s.item}  href="#">Settings</a>
    </nav>
  );
};

export default NavBar;