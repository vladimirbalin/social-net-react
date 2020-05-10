import { AuthAPI, SecurityAPI } from "../services/api";
import { stopSubmit } from "redux-form";

const TO_AUTH = "auth/TO_AUTH";
const IS_FETCHING = "auth/IS_FETCHING";
const LOGIN_SUCCEEDED = "auth/LOGIN_SUCCEEDED";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

let initialState = {
  login: null,
  email: null,
  userId: null,
  isAuth: false,
  isFetching: false,
  loginSucceded: false,
  captchaUrl: ''
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case TO_AUTH:
      return {
        ...state,
        ...action.authInfo,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        loginSucceded: action.loginSucceded,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.url
      }
    default:
      return state;
  }
};
export const isFetching = (isFetching) => ({type: IS_FETCHING, isFetching});
export const loginSucceded = (loginSucceded) => ({type: LOGIN_SUCCEEDED, loginSucceded});
export const setAuth = (login, email, userId, isAuth) => ({
  type: TO_AUTH,
  authInfo: { login, email, userId, isAuth },
});
export const setCaptchaUrl = (url) => ({type: SET_CAPTCHA_URL, url})

export const getAuthUserData = () =>  async (dispatch) => {
  const response = await AuthAPI.auth();

  if (response.resultCode === 0) {
    const { login, email, id } = response.data;
    dispatch(setAuth(login, email, id, true));
  }
};
export const loginThunk = (formData) => async (dispatch) => {
  dispatch(isFetching(true));
  const response = await AuthAPI.login(formData)
  
  if (response.resultCode === 0) {
    dispatch(isFetching(false));
    dispatch(getAuthUserData());
    dispatch(loginSucceded(true));
  } else if(response.resultCode === 1){
    dispatch(isFetching(false));
    let messageError = response.messages.length
      ? response.messages[0]
      : "something went wrong";
    let action = stopSubmit("login", {_error: messageError});
    dispatch(action);
  } else {
    dispatch(isFetching(false));
    dispatch(getCaptchaUrl());
    let messageError = response.messages.length
      ? response.messages[0]
      : "something went wrong";
    let action = stopSubmit("login", {_error: messageError});
    dispatch(action);
  }
};
export const logoutThunk = () => async (dispatch) => {
  dispatch(isFetching(true));
  dispatch(loginSucceded(false));
  const response = await AuthAPI.logout();

  if (response.resultCode === 0) {
    dispatch(isFetching(false));
    dispatch(setAuth(null, null, null, false));
  } else {
    dispatch(isFetching(false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await SecurityAPI.getCaptchaUrl();
  const captcha = response.url;
  dispatch(setCaptchaUrl(captcha));
}


export default authReducers;
