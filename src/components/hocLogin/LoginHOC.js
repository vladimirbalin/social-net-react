import { Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

export const LoginHOC = (WrappedComponent) => {
  const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

  const NewComp = (props) => {
    return (
      !props.isAuth ?
        <Redirect to={'/login'}/> :
        <WrappedComponent {...props} />
    );
  };

  return connect(mapStateToProps)(NewComp);
};