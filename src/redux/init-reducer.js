import { getAuthUserData } from "./auth-reducer";

const SUCCESSFULL_INIT = 'SET_INITIALIZED';

let initialState = {
  initialized: false
};


const initReducer = (state = initialState, action) => {

  switch (action.type) {
    case SUCCESSFULL_INIT:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};


export const initializingSuccess = () => ({
  type: SUCCESSFULL_INIT
});

export const initializeThunk = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
    .then(initializingSuccess());
  Promise.all([promise])
    .then(() => {
      dispatch(initializingSuccess());
    });
};

export default initReducer;