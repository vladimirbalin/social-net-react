import React from "react";
import s from './Header.module.css';
import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo.png"/>
    </header>
  );
};

export default Header;