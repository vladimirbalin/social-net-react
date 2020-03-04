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
        ...action.authInfo,
        isAuth: true
      };

    default:
      return state;
  }
};


export const setAuth = (login, email, userId) => ({type: TO_AUTH, authInfo: {login, email, userId}});

export default authReducers;