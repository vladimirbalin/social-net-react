import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const LoginHOC = (WrappedComponent) => {

  const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

  const _LoginHOC = (props) => {
    return (
      !props.isAuth ?
        <Redirect to={'/login'}/> :
       <WrappedComponent {...props} />
    );
  };

  return connect(mapStateToProps)(_LoginHOC);
};