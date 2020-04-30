import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './LoginForm.module.css';
import { Input } from "../common/FormControls/FormsControls";
import { requiredFields } from "../../services/validators";

const LoginForm = (props) => {
  const {handleSubmit} = props;
  // const passValue = 'gR3bfcF44jNKAct';
  // const loginValue = 'vladimirzq@Gmail.com';
  return (
  <form onSubmit={handleSubmit} className={s.form}>
    <div className={s.main}>
      <Field name='email' label={'Login'}
             placeholder={'login'}
             component={Input}
             validate={[requiredFields]}
             type='text'
             formProp={s.formProp}/>
    </div>
    <div className={s.main}>
      <Field name='password' label={'Password'}
             placeholder={'pass'}
             component={Input}
             validate={[requiredFields]}
             type='password'
             formProp={s.formProp}/>
    </div>
    <div className={s.checkbox}>
      <label htmlFor='rememberMe'>Запомнить меня</label>
      <Field name='rememberMe' id='rememberMe' component='input' type='checkbox'/>
    </div>

    <button type='submit'>Sign in</button>
  </form>)
};

export default reduxForm({form: 'login'})(LoginForm);

