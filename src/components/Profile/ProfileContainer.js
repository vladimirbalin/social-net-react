import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserStatusThunk,
  setUserProfile,
  setUserProfileThunk,
  setUserStatusThunk,
  setUserAvatarThunk,
  saveProfile,
  setProfileInfoTransmitted
} from "../../redux/profile-reducer";
import { compose } from "redux";
import { Redirect } from 'react-router-dom';
import { withHeader } from "../common/hocs/withHeader/withHeader";

class ProfileContainer extends React.Component {
  refreshProfile() {
    const urlId = this.props.match.params.userID;
    const userId = this.props.userId;
    if (urlId) {
      this.props.setUserProfileThunk(urlId);
      this.props.getUserStatusThunk(urlId);
    } else if (this.props.isAuth) {
      this.props.setUserProfileThunk(userId);
      this.props.getUserStatusThunk(userId);
    }
  }

  componentDidMount() {
    this.refreshProfile();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userID !== this.props.match.params.userID) {
      this.refreshProfile();
    }
  }

  render() {
    const {
      profileInfo, status, setUserStatusThunk, setUserAvatarThunk, isAuth,
      isFetchingAvatar, isFetchingProfileInfo, saveProfile, isProfileInfoTransmitted, setProfileInfoTransmitted
    } = this.props;
    return !(this.props.match.params.userID || this.props.userId) ?
      <Redirect to='/login'/> :
      <Profile profile={profileInfo}
               status={status}
               setUserStatusThunk={setUserStatusThunk}
               setUserAvatarThunk={setUserAvatarThunk}
               isAuth={isAuth}
               isOwner={!this.props.match.params.userID}
               isFetchingAvatar={isFetchingAvatar}
               isFetchingProfileInfo={isFetchingProfileInfo}
               saveProfile={saveProfile}
               isProfileInfoTransmitted={isProfileInfoTransmitted}
               setProfileInfoTransmitted={setProfileInfoTransmitted}
      />
  };
}

const mapStateToProps = (state) => {
  const {
    profileInfo,
    status,
    isFetchingAvatar,
    isFetchingProfileInfo,
    isProfileInfoTransmitted
  } = state.profileComp;
  const { userId, isAuth } = state.auth;
  return {
    profileInfo,
    status,
    userId,
    isAuth,
    isFetchingAvatar,
    isFetchingProfileInfo,
    isProfileInfoTransmitted
  }
};
const mapDispatchToProps = {
  setUserProfile, setUserProfileThunk, getUserStatusThunk,
  setUserStatusThunk, setUserAvatarThunk,
  saveProfile, setProfileInfoTransmitted
};


export default compose(
  withHeader,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);