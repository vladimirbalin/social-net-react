import store from './redux/redux-store';
import ReactDOM from "react-dom";
import App from "./components/App/App";
import React from "react";
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));


window.store = store;
