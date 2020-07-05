import { AuthAPI, SecurityAPI } from "../services/api";
import { stopSubmit } from "redux-form";

const TO_AUTH = "auth/TO_AUTH";
const IS_FETCHING = "auth/IS_FETCHING";
const LOGIN_SUCCEEDED = "auth/LOGIN_SUCCEEDED";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

let initialState = {
  login: null as string | null,
  email: null as string | null,
  userId: null as number | null,
  isAuth: false,
  isFetching: false,
  loginSucceeded: false,
  captchaUrl: null as string | null
};
export type InitialStateType = typeof initialState;

const authReducers = (state: InitialStateType = initialState,
                      action: any): InitialStateType => {
  switch (action.type) {
    case TO_AUTH:
      return {
        ...state,
        ...action.payload,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        loginSucceeded: action.loginSucceeded,
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


type IsFetchingActionType = {type: typeof IS_FETCHING, isFetching: boolean}
export const isFetching = (isFetching: boolean): IsFetchingActionType => ({type: IS_FETCHING, isFetching});

type LoginSucceededActionType = {type: typeof LOGIN_SUCCEEDED, loginSucceeded: boolean};
export const loginSucceeded = (loginSucceeded: boolean): LoginSucceededActionType => ({
  type: LOGIN_SUCCEEDED,
  loginSucceeded
});

type SetAuthActionPayloadType = {login: string | null, email: string | null, userId: number | null, isAuth: boolean};
type SetAuthActionType = {type: typeof TO_AUTH, payload: SetAuthActionPayloadType};
export const setAuth = (login: string | null,
                        email: string | null,
                        userId: number | null,
                        isAuth: boolean): SetAuthActionType => ({
  type: TO_AUTH,
  payload: {login, email, userId, isAuth},
});

type SetCaptchaUrlActionType = {type: typeof SET_CAPTCHA_URL, url: string}
export const setCaptchaUrl = (url: string): SetCaptchaUrlActionType => ({type: SET_CAPTCHA_URL, url})

export const getAuthUserData = () => async (dispatch: any) => {
  const response = await AuthAPI.auth();

  if (response.resultCode === 0) {
    const {login, email, id} = response.data;
    dispatch(setAuth(login, email, id, true));
  }
};
export const loginThunk = (email: string,
                           password: string,
                           rememberMe: boolean | null,
                           captcha: string | null) => async (dispatch: any) => {
  dispatch(isFetching(true));
  const response = await AuthAPI.login(email, password, rememberMe, captcha)

  if (response.resultCode === 0) {
    dispatch(isFetching(false));
    dispatch(getAuthUserData());
    dispatch(loginSucceeded(true));
  } else if (response.resultCode === 1) {
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
export const logoutThunk = () => async (dispatch: any) => {
  dispatch(isFetching(true));
  dispatch(loginSucceeded(false));
  const response = await AuthAPI.logout();

  if (response.resultCode === 0) {
    dispatch(isFetching(false));
    dispatch(setAuth(null, null, null, false));
  } else {
    dispatch(isFetching(false));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await SecurityAPI.getCaptchaUrl();
  const captcha = response.url;
  dispatch(setCaptchaUrl(captcha));
}


export default authReducers;
