import React from "react";
import { compose } from "redux";
import { LoginHOC } from "../hocLogin/LoginHOC";

const  News = (props) => {
  return (
    <div>
      News
    </div>
  )
};

export default compose(
  LoginHOC,
)(News);