import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutThunk } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    const { isAuth, logoutThunk, login } = this.props;
    return (
      <Header
        isAuth={isAuth}
        logoutThunk={logoutThunk}
        login={login}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logoutThunk })(HeaderContainer);
