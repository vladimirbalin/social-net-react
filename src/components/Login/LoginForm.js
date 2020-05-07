import React from "react";
import './LoginForm.styles.scss';
import Loader from "../common/Loader/Loader";
import { reduxForm } from "redux-form";
import { requiredFields } from "../../services/validators";
import { RenderInput } from "../common/FormControls/FormControls";
import { createField } from "../common/FormControls/FormControls";

const LoginForm = ({ isFetching, handleSubmit, error, loginSucceded, ...otherProps }) => {
  
  return  <form onSubmit={handleSubmit} className='loginpage__form'>
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
    <div className='loginpage__buttonblock'>
      <button className={isFetching || loginSucceded ? 'disabled' : ''} type='submit' disabled={isFetching}>Sign in</button>
      {isFetching ? <Loader /> : ''}
      {loginSucceded ? <strong className='succeeded'>Login succeeded</strong> : ''}
    </div>
  </form>
}
export default reduxForm({form: 'login'})(LoginForm);

