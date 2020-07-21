import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.styles.scss';
import logo from '../../assets/img/logo.png';
import Button from '../common/Button/Button';

const Header = ({ isAuth, logoutThunk, login }) => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo.png" />
      {isAuth ? (
        <div className="header__login">
          <span>Приветствуем Вас, </span>
          <strong>{login} </strong>
          <Button onClick={logoutThunk} reversed small>
            Sign out
          </Button>
        </div>
      ) : (
        <NavLink className="header__login" to="/login">
          <Button reversed small>
            Sign in
          </Button>
        </NavLink>
      )}
    </header>
  );
};

export default Header;
