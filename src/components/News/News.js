import React from "react";
import './News.styles.scss';
import { withRouter } from "react-router-dom";
import { LoginHOC } from "../hocLogin/LoginHOC";

const  News = (props) => {
  return (
    <div>
      News
    </div>
  )
};

export default LoginHOC(withRouter(News));