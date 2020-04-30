import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserStatusThunk,
  setUserProfile,
  setUserProfileThunk,
  setUserStatusThunk,
} from "../../redux/profile-reducer";
import { compose } from "redux";
import { LoginHOC } from "../hocLogin/LoginHOC";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfileThunk(this.props.match.params.userID);
    this.props.getUserStatusThunk(this.props.match.params.userID);

    console.log('location: ', this.props.location, ' history: ', this.props.history, ' match: ', this.props.match);
  };

  render() {
    return (
      <Profile profile={this.props.profile}
               status={this.props.status}
               setUserStatusThunk={this.props.setUserStatusThunk}
      />
    );
  };
}

const mapStateToProps = (state) => ({
  profile: state.profileComp.profile,
  status: state.profileComp.status
});
const mapDispatchToProps = {setUserProfile, setUserProfileThunk, getUserStatusThunk, setUserStatusThunk};


export default compose(
  LoginHOC,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);