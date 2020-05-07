import React from "react";
import "./Login.styles.scss";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";

const Login = ({ loginThunk, isAuth, isFetching, loginSucceded }) => {
  const handleSubmit = (formData) => {
    loginThunk(formData);
  }
  return isAuth ? <Redirect to={'/profile'}/> :
    <section className='loginpage'>
      <h1>Залогиньтесь пожалуйста</h1>
      <LoginForm isFetching={isFetching} loginSucceded={loginSucceded} loginThunk={loginThunk} onSubmit={handleSubmit}/>
      
    </section>
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isFetching: state.auth.isFetching,
  loginSucceded: state.auth.loginSucceded
});


export default connect(mapStateToProps, {loginThunk})(Login);
