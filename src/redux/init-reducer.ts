import { getAuthUserData } from './auth-reducer';
import { ThunkAction } from 'redux-thunk';
import { RootStateType } from './redux-store';

const SUCCESSFUL_INIT = 'init/SET_INITIALIZED';

type InitStateType = {
  initialized: boolean;
};
let initialState: InitStateType = {
  initialized: false,
};

const initReducer = (
  state = initialState,
  action: InitActionsType
): InitStateType => {
  switch (action.type) {
    case SUCCESSFUL_INIT:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};
type InitActionsType = InitializingSuccessActionType;

/*---actions---*/
type InitializingSuccessActionType = { type: typeof SUCCESSFUL_INIT };
export const initializingSuccess = (): InitializingSuccessActionType => ({
  type: SUCCESSFUL_INIT,
});

/*---thunks---*/
type UsersThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  InitActionsType
>;
export const initializeThunk = (): UsersThunkType => async (dispatch) => {
  let promise = await dispatch(getAuthUserData());
  initializingSuccess();

  await Promise.all([promise]);
  dispatch(initializingSuccess());
};

export default initReducer;
