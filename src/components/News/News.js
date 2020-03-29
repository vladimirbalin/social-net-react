import React from "react";
import { withRouter } from "react-router-dom";
import { LoginHOC } from "../hocLogin/LoginHOC";

const  News = (props) => {
  debugger
  return (
    <div>
      News
    </div>
  )
};

export default LoginHOC(withRouter(News));