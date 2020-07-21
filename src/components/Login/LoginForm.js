import React from 'react';
import { reduxForm } from 'redux-form';
import './LoginForm.styles.scss';
import Loader from '../common/Loader/Loader';
import { requiredFields } from '../../services/validators';
import { RenderInput } from '../common/FormControls/FormControls';
import { createField } from '../common/FormControls/FormControls';
import Button from '../common/Button/Button';

const LoginForm = ({
  isFetching,
  handleSubmit,
  error,
  loginSucceeded,
  captchaUrl,
}) => {
  return (
    <form onSubmit={handleSubmit} className="loginpage__form">
      <div className="loginpage__item">
        {createField(
          'email',
          'Login',
          'login',
          [requiredFields],
          RenderInput,
          'text'
        )}
      </div>
      <div className="loginpage__item">
        {createField(
          'password',
          'Password',
          'pass',
          [requiredFields],
          RenderInput,
          'password'
        )}
      </div>
      <div className="loginpage__checkbox">
        {createField(
          'rememberMe',
          'Запомнить меня',
          '',
          [],
          RenderInput,
          'checkbox'
        )}
      </div>
      {captchaUrl && (
        <div className="loginpage__captcha">
          <img src={captchaUrl} alt="captcha" />
          <span>Введите код с картинки</span>
          {createField(
            'captcha',
            '',
            '',
            [requiredFields],
            RenderInput,
            'text'
          )}
        </div>
      )}
      <span className="loginpage__summary-error">{error}</span>
      <div className="loginpage__buttonblock">
        <Button disabled={isFetching || loginSucceeded}>Sign in</Button>
        {isFetching ? <Loader /> : ''}
        {loginSucceeded ? (
          <strong className="succeeded">Login succeeded</strong>
        ) : (
          ''
        )}
      </div>
    </form>
  );
};
export default reduxForm({ form: 'login' })(LoginForm);
