import React from "react";
import './Header.styles.scss';
import logo from '../../assets/img/logo.png';
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Header = ({ isAuth, logoutThunk, login }) => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt="logo.png"/>
      {isAuth ?
        <div className='header__login'><span>Приветствуем Вас, </span><strong>{login} </strong>
        <button onClick={logoutThunk}><FiLogOut /></button>
        </div> :

        <NavLink className='header__login' to="/login"><button>Sign in</button></NavLink>
      }
    </header>
  );
};

export default Header;