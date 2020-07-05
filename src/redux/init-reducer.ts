import { getAuthUserData } from "./auth-reducer";

const SUCCESSFUL_INIT = 'init/SET_INITIALIZED';

type InitialStateType = {
  initialized: boolean
}
let initialState: InitialStateType = {
  initialized: false
};

const initReducer = (state: InitialStateType = initialState,
                     action: InitializingSuccessActionType): InitialStateType => {
  switch (action.type) {
    case SUCCESSFUL_INIT:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

type InitializingSuccessActionType = {type: typeof SUCCESSFUL_INIT}
export const initializingSuccess = (): InitializingSuccessActionType => ({type: SUCCESSFUL_INIT});

export const initializeThunk = () => async (dispatch: any) => {
  let promise = await dispatch(getAuthUserData())
  initializingSuccess();
  
  await Promise.all([promise]);
  dispatch(initializingSuccess());
};

export default initReducer;