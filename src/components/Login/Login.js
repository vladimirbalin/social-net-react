import React from "react";
import "./Login.styles.scss";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";

const Login = ({ loginThunk, isAuth, isFetching, loginSucceded, captchaUrl }) => {
  const handleSubmit = (formData) => {
    const captcha = loginThunk(formData);
    captcha.then((url) => console.log(url))
  }
  return isAuth ? <Redirect to={'/profile'}/> :
    <section className='loginpage'>
      <h1>Залогиньтесь пожалуйста</h1>
      <LoginForm isFetching={isFetching} loginSucceded={loginSucceded} 
        loginThunk={loginThunk} onSubmit={handleSubmit} captchaUrl={captchaUrl}/>
      
    </section>
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isFetching: state.auth.isFetching,
  loginSucceded: state.auth.loginSucceded,
  captchaUrl: state.auth.captchaUrl
});


export default connect(mapStateToProps, {loginThunk})(Login);
