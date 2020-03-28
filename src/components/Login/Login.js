import s from "./Login.module.css";
import React from "react";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";
import HeaderContainer from "../Header/HeaderContainer";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunk(formData)
  };

  return props.state ? <Redirect to={'/profile'}/> :
      <div className='app-wrapper'>
        <HeaderContainer/>
        <div className='middle'>
          <div className='app-wrapper-content'>
            <div className={s.loginPage}>
              <h1>Залогиньтесь пожалуйста</h1>
              <LoginForm onSubmit={onSubmit}/>
            </div>
          </div>
        </div>
      </div>
};

const mapStateToProps = (state) => ({
  state: state.auth.isAuth
});


export default connect(mapStateToProps, {loginThunk})(Login);
