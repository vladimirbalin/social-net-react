import { Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import Content from "../common/Content/Content";

export const LoginHOC = (WrappedComponent) => {

  const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

  const _LoginHOC = (props) => {
    return (
      !props.isAuth ?
        <Redirect to={'/login'}/> :
        <Content><WrappedComponent {...props} /></Content>
    );
  };

  return connect(mapStateToProps)(_LoginHOC);
};