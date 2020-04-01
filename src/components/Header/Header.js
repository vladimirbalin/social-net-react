import React from "react";
import s from './Header.module.css';
import logo from '../../assets/img/logo.png';
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo.png"/>
      {props.state.isAuth ?
        <div className={s.login}><span>Приветствуем Вас, </span><strong>{props.state.login} </strong>
        <button onClick={props.logoutThunk}><FiLogOut /></button>
        </div> :

        <NavLink className={s.login} to="/login"><button>Sign in</button></NavLink>
      }
    </header>
  );
};

export default Header;