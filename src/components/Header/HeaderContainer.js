import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthThunk } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthThunk();
  }

  render() {
    return (
      <Header {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.auth
});



export default connect(mapStateToProps, {setAuthThunk})(HeaderContainer);