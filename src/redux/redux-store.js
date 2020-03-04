import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducers from "./auth-reducer";

let reducers = combineReducers({
  profileComp: profileReducer,
  dialogsComp: dialogsReducer,
  usersComp: usersReducer,
  auth: authReducers
});

let store = createStore(reducers);

export default store;