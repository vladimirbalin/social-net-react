import { AuthAPI } from "../services/api";
import { stopSubmit } from "redux-form";

const TO_AUTH = "auth/TO_AUTH";

let initialState = {
  login: null,
  email: null,
  userId: null,
  isAuth: false,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case TO_AUTH:
      return {
        ...state,
        ...action.authInfo,
      };

    default:
      return state;
  }
};

export const setAuth = (login, email, userId, isAuth) => ({
  type: TO_AUTH,
  authInfo: { login, email, userId, isAuth },
});
export const getAuthUserData = () =>  async (dispatch) => {
  const response = await AuthAPI.auth();

  if (response.resultCode === 0) {
    const { login, email, id } = response.data;
    dispatch(setAuth(login, email, id, true));
  }
};
export const loginThunk = (formData) => async (dispatch) => {
  const response = await AuthAPI.login(formData)
  
  if (response.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let messageError = response.data.messages.length
      ? response.data.messages[0]
      : "something went wrong";
    let action = stopSubmit("login", { _error: messageError });
    dispatch(action);
  }
};
export const logoutThunk = () => async (dispatch) => {
  const response = await AuthAPI.logout();

  if (response.resultCode === 0) {
    dispatch(setAuth(null, null, null, false));
  }
};
export default authReducers;
