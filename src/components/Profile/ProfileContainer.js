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

class ProfileContainer extends React.Component {
  refreshProfile(){
    const urlId = this.props.match.params.userID;
    const userId = this.props.userId;
    if(urlId){
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
  componentDidUpdate(prevProps){
    if(prevProps.match.params.userID !== this.props.match.params.userID){
      this.refreshProfile();
    }
  }

  render() {
    const { profile, status, setUserStatusThunk, setUserAvatarThunk, isAuth,
      isFetchingAvatar, isFetchingProfileInfo, saveProfile, isProfileInfoTransmitted, setProfileInfoTransmitted } = this.props;
    return !(this.props.match.params.userID || this.props.userId) ? 
      <Redirect to='/login'/> :      
      <Profile profile={profile}
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

const mapStateToProps = (state) => ({
  profile: state.profileComp.profileInfo,
  profileInfoTable: state.profileComp.profileInfoTable,
  status: state.profileComp.status,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
  isFetchingAvatar: state.profileComp.isFetchingAvatar,
  isFetchingProfileInfo: state.profileComp.isFetchingProfileInfo,
  isProfileInfoTransmitted: state.profileComp.isProfileInfoTransmitted,
});
const mapDispatchToProps = {setUserProfile, setUserProfileThunk, getUserStatusThunk, setUserStatusThunk, setUserAvatarThunk,
  saveProfile, setProfileInfoTransmitted};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);