import React from "react";
import "./Login.styles.scss";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";

const Login = ({ loginThunk, isAuth, isFetching, loginSucceeded, captchaUrl }) => {
  const handleSubmit = (formData) => {
    const captcha = loginThunk(formData.email, formData.password, formData.rememberMe);
    captcha.then((url) => console.log(url))
  }
  return isAuth ? <Redirect to={'/profile'}/> :
    <section className='loginpage'>
      <h1>Залогиньтесь пожалуйста</h1>
      <LoginForm isFetching={isFetching} loginSucceeded={loginSucceeded}
                 loginThunk={loginThunk} onSubmit={handleSubmit} captchaUrl={captchaUrl}/>

    </section>
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isFetching: state.auth.isFetching,
  loginSucceeded: state.auth.loginSucceeded,
  captchaUrl: state.auth.captchaUrl
});


export default connect(mapStateToProps, { loginThunk })(Login);
