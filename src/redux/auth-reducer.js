import { AuthAPI } from "../services/api";
import { stopSubmit } from "redux-form";

const TO_AUTH = 'TO_AUTH';

let initialState = {
  login: null,
  email: null,
  userId: null,
  isAuth: false
};


const authReducers = (state = initialState, action) => {

  switch (action.type) {
    case TO_AUTH:
      return {
        ...state,
        ...action.authInfo
      };

    default:
      return state;
  }
};


export const setAuth = (login, email, userId, isAuth) => ({type: TO_AUTH, authInfo: {login, email, userId, isAuth}});
export const getAuthUserData = () => {
  return (dispatch) => {
    return AuthAPI.auth()
      .then(data => {
        if (data.resultCode === 0) {
          const {login, email, id} = data.data;
          dispatch(setAuth(login, email, id, true));
        }
      });
  }
};
export const loginThunk = (formData) => (dispatch) => {
  AuthAPI.login(formData)
    .then(data => {
      if(data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let messageError = data.messages.length ? data.messages[0] : 'some error'  
        let action = stopSubmit('login', {_error: messageError});
        dispatch(action);
      }
    })
};
export const logoutThunk = () => (dispatch) => {
  AuthAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuth(null, null, null, false));
      }
    });
};
export default authReducers;