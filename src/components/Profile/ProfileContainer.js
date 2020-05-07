import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserStatusThunk,
  setUserProfile,
  setUserProfileThunk,
  setUserStatusThunk,
  setUserAvatarThunk
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
    const { profile, status, setUserStatusThunk, setUserAvatarThunk, isAuth, avatarUploadSucceeded } = this.props;
    return !(this.props.match.params.userID || this.props.userId) ? 
      <Redirect to='/login'/> :      
      <Profile profile={profile}
               status={status}
               setUserStatusThunk={setUserStatusThunk}
               setUserAvatarThunk={setUserAvatarThunk}
               avatarUploadSucceeded={avatarUploadSucceeded}
               isAuth={isAuth}
               isOwner={!this.props.match.params.userID}
      />
  };
}

const mapStateToProps = (state) => ({
  profile: state.profileComp.profileInfo,
  status: state.profileComp.status,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
  avatarUploadSucceeded: state.profileComp.avatarUploadSucceeded
});
const mapDispatchToProps = {setUserProfile, setUserProfileThunk, getUserStatusThunk, setUserStatusThunk, setUserAvatarThunk};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);