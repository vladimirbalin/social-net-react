import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducers from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import initReducer from "./init-reducer";

type RootReducerType = typeof rootReducer;
export type RootStateType = ReturnType<RootReducerType>;

let rootReducer = combineReducers({
  profileComp: profileReducer,
  dialogsComp: dialogsReducer,
  usersComp: usersReducer,
  auth: authReducers,
  form: formReducer,
  init: initReducer
});

const middleWare = [thunkMiddleware]
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleWare)
));

// @ts-ignore
window.store = store;

export default store;