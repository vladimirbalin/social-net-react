import React from "react";
import "./Login.styles.scss";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";
import { compose } from "redux";
import { withHeader } from "../common/hocs/withHeader/withHeader";

const Login = ({ loginThunk, isAuth, isFetching, loginSucceeded, captchaUrl }) => {
  const handleSubmit = (formData) => {
    const { email, password, rememberMe, captcha } = formData;
    loginThunk(email, password, rememberMe, captcha);
  }
  return isAuth ? <Redirect to={'/profile'}/> :
    <section className='loginpage'>
      <h1>Залогиньтесь пожалуйста</h1>
      <LoginForm isFetching={isFetching} loginSucceeded={loginSucceeded}
                 loginThunk={loginThunk} onSubmit={handleSubmit} captchaUrl={captchaUrl}/>

    </section>
};

const mapStateToProps = (state) => {
  const { isAuth, isFetching, loginSucceeded, captchaUrl } = state.auth;
  return {isAuth, isFetching, loginSucceeded, captchaUrl}
};


export default compose(
  connect(mapStateToProps, { loginThunk }),
  withHeader
)(Login);
