import React from "react";
import s from './Header.module.css';
import logo from '../../assets/img/logo.png';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo.png"/>
      {props.state.isAuth ?
        <div className={s.login}>{props.state.login}</div> :
        <div className={s.login}>Login</div>
      }
    </header>
  );
};

export default Header;