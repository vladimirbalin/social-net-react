import s from "./Login.module.css";
import React from "react";
import LoginForm from "./LoginForm";
import { AuthAPI } from "../../services/api";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthThunk } from "../../redux/auth-reducer";
import HeaderContainer from "../Header/HeaderContainer";

const Login = (props) => {
  const onSubmit = (formData) => {
    AuthAPI.login(formData)
      .then(data => {
        if (data.resultCode === 0) {
          props.setAuthThunk();
        }
      })
  };

  if (props.isAuth) {
    return <Redirect to={'/users'}/>
  }
  return (
    <div className={s.loginPage}>
      <h1>Залогиньтесь пожалуйста</h1>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  );


};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {setAuthThunk})(Login);
