import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducers from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import initReducer from "./init-reducer";

let reducers = combineReducers({
  profileComp: profileReducer,
  dialogsComp: dialogsReducer,
  usersComp: usersReducer,
  auth: authReducers,
  form: formReducer,
  init: initReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

export default store;