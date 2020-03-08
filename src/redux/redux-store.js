import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducers from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profileComp: profileReducer,
  dialogsComp: dialogsReducer,
  usersComp: usersReducer,
  auth: authReducers,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;