import React from "react";
import "./Login.styles.scss";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";

const Login = ({ loginThunk, isAuth }) => {
  const handleSubmit = (formData) => {
    loginThunk(formData);
  }
  return isAuth ? <Redirect to={'/profile'}/> :
    <section className='loginpage'>
      <h1>Залогиньтесь пожалуйста</h1>
      <LoginForm loginThunk={loginThunk} onSubmit={handleSubmit}/>
    </section>
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {loginThunk})(Login);
