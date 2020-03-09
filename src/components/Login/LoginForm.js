import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './LoginForm.module.css';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  // const passValue = 'gR3bfcF44jNKAct';
  // const loginValue = 'vladimirzq@Gmail.com';
  return <form onSubmit={handleSubmit} className={s.form}>
    <div className={s.formItems}>
      <label className={s.formItem}>Login</label>
      <Field name='email' placeholder={'login'} component='input' type='text' className={s.formItem}/>
    </div>
    <div className={s.formItems}>
      <label className={s.formItem}>Password</label>
      <Field name='password' placeholder={'pass'} component='input' type='text' className={s.formItem}/>
    </div>
    <div className={s.checkbox}>
      <label htmlFor='rememberMe'>Запомнить меня</label>
      <Field name='rememberMe' id='rememberMe' component='input' type='checkbox' />
    </div>

    <button type='submit'>Sign in</button>
  </form>
};

export default reduxForm({form: 'login'})(LoginForm);

