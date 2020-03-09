import s from "./Login.module.css";
import React from "react";
import LoginForm from "./LoginForm";
import { AuthAPI } from "../../api/api";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthThunk } from "../../redux/auth-reducer";

const Login = (props) => {
  const onSubmit = (formData) => {
    AuthAPI.login(formData)
      .then(data => {
        console.log(data);
         if(data.resultCode === 0) {
           props.setAuthThunk();
         }
      })
  };

  return props.state ? <Redirect to={'/profile'}/> : <div className={s.loginPage}>
    <h1>Залогиньтесь пожалуйста</h1>
    <LoginForm onSubmit={onSubmit}/>
  </div>
};

const mapStateToProps = (state) => ({
  state: state.auth.isAuth
});



export default connect(mapStateToProps, {setAuthThunk})(Login);
