import store from './redux/redux-store';
import ReactDOM from "react-dom";
import App from "./components/App/App";
import React from "react";


const rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state}
                       dispatch={store.dispatch} />, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(()=>{
  let state = store.getState();
  rerenderEntireTree(state);
});
