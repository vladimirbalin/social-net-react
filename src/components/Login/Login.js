import "./Login.styles.scss";
import React from "react";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";
import HeaderContainer from "../Header/HeaderContainer";

const Login = (props) => {
  const handleSubmit = (formData) => {
    props.loginThunk(formData)
  };

  return props.state ? <Redirect to={'/profile'}/> :
      <div className='app-wrapper'>
        <HeaderContainer/>
        <div className='middle'>
          <div className='app-wrapper-content'>
            <section className='loginpage'>
              <h1>Залогиньтесь пожалуйста</h1>
              <LoginForm onSubmit={handleSubmit}/>
            </section>
          </div>
        </div>
      </div>
};

const mapStateToProps = (state) => ({
  state: state.auth.isAuth
});


export default connect(mapStateToProps, {loginThunk})(Login);
