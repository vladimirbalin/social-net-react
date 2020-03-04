import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuth } from "../../redux/auth-reducer";
import * as axios from 'axios';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        if (response.data.resultCode === 0) {
          const {login, email, id} = response.data.data;
          this.props.setAuth(login, email, id);
        }
      });
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



export default connect(mapStateToProps, {setAuth})(HeaderContainer);