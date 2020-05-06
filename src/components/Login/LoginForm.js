import React from "react";
import './LoginForm.styles.scss';
import { reduxForm } from "redux-form";
import { requiredFields } from "../../services/validators";
import { RenderInput } from "../common/FormControls/FormControls";
import { createField } from "../common/FormControls/FormControls";

const LoginForm = ({ handleSubmit, error, submitting, ...otherProps }) => 

  <form onSubmit={handleSubmit} className='loginpage__form'>
    <div className='loginpage__item'>
      {createField('email', 'Login', 'login', 
                    [requiredFields], RenderInput, 'text')}
    </div>
    <div className='loginpage__item'>
      {createField('password', 'Password', 'pass', 
                    [requiredFields], RenderInput, 'password')}
    </div>
    <div className='loginpage__checkbox'>
      {createField('rememberMe', 'Запомнить меня', '', [], RenderInput, 'checkbox')}
    </div>
    {error && <p className='loginpage__summary-error'>{error}</p>}
    <button className={submitting ? 'disabled' : ''} type='submit' disabled={submitting}>Sign in</button>
  </form>

export default reduxForm({form: 'login'})(LoginForm);

