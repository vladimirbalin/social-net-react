import React from "react";
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img style={{paddingLeft: 20, width: 100}} src="https://seeklogo.com/images/L/line-buildings-logo-FB8A3E30D0-seeklogo.com.png"/>
    </header>
  );
};

export default Header;