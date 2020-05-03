import "./Login.styles.scss";
import React from "react";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";

const Login = (props) => {
  const handleSubmit = (formData) => {
    props.loginThunk(formData);
  }
  return props.state ? <Redirect to={'/profile'}/> :
    <section className='loginpage'>
      <h1>Залогиньтесь пожалуйста</h1>
      <LoginForm loginThunk={props.loginThunk} onSubmit={handleSubmit}/>
    </section>
};

const mapStateToProps = (state) => ({
  state: state.auth.isAuth
});


export default connect(mapStateToProps, {loginThunk})(Login);
