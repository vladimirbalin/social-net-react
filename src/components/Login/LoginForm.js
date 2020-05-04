import React from "react";
import { Field, reduxForm } from "redux-form";
import './LoginForm.styles.scss';
import { requiredFields } from "../../services/validators";
import { RenderInput } from "../common/FormControls/FormControls";

const LoginForm = ({ handleSubmit, error, submitting, ...otherProps }) => {
  // const passValue = 'gR3bfcF44jNKAct';
  // const loginValue = 'vladimirzq@Gmail.com';

  return (
  <form onSubmit={handleSubmit} className='loginpage__form'>
    <pre>
      {JSON.stringify([submitting, otherProps, error], 0, 2)}
    </pre>
    <div className='loginpage__item'>
      <Field name='email' label='Login'
             placeholder='login'
             component={RenderInput}
             validate={[requiredFields]}
             type='text'/>
    </div>
    <div className='loginpage__item'>
      <Field name='password' label='Password'
             placeholder='pass'
             component={RenderInput}
             validate={[requiredFields]}
             type='password'/>
    </div>
    <div className='loginpage__checkbox'>
      <Field label='Запомнить меня' name='rememberMe' component={RenderInput} type='checkbox'/>
    </div>
    {error && <p className='loginpage__summary-error'>{error}</p>}
    <button className={submitting ? 'disabled' : ''} type='submit' disabled={submitting}>Sign in</button>
    <span>
    
  </span>
  </form>
  
  )
};

export default reduxForm({form: 'login'})(LoginForm);

