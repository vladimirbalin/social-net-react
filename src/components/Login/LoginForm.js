import React from "react";
import { Field, reduxForm } from "redux-form";
import './LoginForm.styles.scss';
import { Input } from "../common/FormControls/FormsControls";
import { requiredFields } from "../../services/validators";

const LoginForm = ({ handleSubmit, error }) => {
  
  // const passValue = 'gR3bfcF44jNKAct';
  // const loginValue = 'vladimirzq@Gmail.com';
  return (
  <form onSubmit={handleSubmit} className='loginpage__form'>
    <div className='loginpage__item'>
      <Field name='email' label='Login'
             placeholder='login'
             component={Input}
             validate={[requiredFields]}
             type='text'/>
    </div>
    <div className='loginpage__item'>
      <Field name='password' label='Password'
             placeholder='pass'
             component={Input}
             validate={[requiredFields]}
             type='password'/>
    </div>
    <div className='loginpage__checkbox'>
      <Field label='Запомнить меня' name='rememberMe' component={Input} type='checkbox'/>
    </div>
    {error && <div className='loginpage__summary-error'>{error}</div>}
    <button type='submit'>Sign in</button>
  </form>)
};

export default reduxForm({form: 'login'})(LoginForm);

