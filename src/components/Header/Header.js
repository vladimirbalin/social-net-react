import React from "react";
import './Header.styles.scss';
import logo from '../../assets/img/logo.png';
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Header = (props) => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt="logo.png"/>
      {props.state.isAuth ?
        <div className='header__login'><span>Приветствуем Вас, </span><strong>{props.state.login} </strong>
        <button onClick={props.logoutThunk}><FiLogOut /></button>
        </div> :

        <NavLink className='header__login' to="/login"><button>Sign in</button></NavLink>
      }
    </header>
  );
};

export default Header;