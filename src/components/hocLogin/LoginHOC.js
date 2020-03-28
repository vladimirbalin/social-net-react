import { Redirect, withRouter } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import Content from "../common/Content/Content";

export const LoginHOC = (WrappedComponent) => {

  const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

  class _LoginHOC extends React.Component{

    render() {
      return (
        !this.props.isAuth ?
          <Redirect to={'/login'}/> :
            <WrappedComponent {...this.props} />
      );
    }

  }

  return connect(mapStateToProps, withRouter )(_LoginHOC);
};