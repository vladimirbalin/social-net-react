import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './Login.module.css';

const Login = (props) => {
  return <div className={s.loginPage}>
    <h1>Залогиньтесь пожалуйста</h1>
    <LoginForm />
  </div>
};

let LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div className={s.formItems}>
      <label className={s.formItem}>Login</label>
      <Field name='login' placeholder={'login'} component='input' type='text' className={s.formItem}/>
    </div>
    <div className={s.formItems}>
      <label className={s.formItem}>Password</label>
      <Field name='password' placeholder={'password'} component='input' type='text' className={s.formItem}/>
    </div>
    <div className={s.checkbox}>
      <label htmlFor='rememberMe'>Запомнить меня</label>
      <Field name='rememberMe' id='rememberMe' component='input' type='checkbox' />
    </div>

    <button type='submit'>Submit</button>
  </form>
};

LoginForm = reduxForm({form: 'login'})(LoginForm);

export default Login;