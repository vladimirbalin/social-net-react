import { getAuthUserData } from "./auth-reducer";

const SUCCESSFULL_INIT = 'init/SET_INITIALIZED';

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

export const initializeThunk = () => async (dispatch) => {
  let promise = await dispatch(getAuthUserData())
  initializingSuccess();
  
  await Promise.all([promise]);
  dispatch(initializingSuccess());
};

export default initReducer;