import React from "react";
import s from './Header.module.css';
import logo from '../../assets/img/logo.png';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo.png"/>
      {props.state.isAuth ?
        <div className={s.login}>Приветствуем Вас, <strong>{props.state.login}</strong>
        <button onClick={props.logoutThunk}>logout</button>
        </div> :

        <NavLink className={s.login} to="/login">Login</NavLink>
      }
    </header>
  );
};

export default Header;