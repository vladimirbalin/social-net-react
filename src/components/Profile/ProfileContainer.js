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
import { Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const urlId = this.props.match.params.userID;
    const userId = this.props.userId;
    if(urlId){
      this.props.setUserProfileThunk(urlId);
      this.props.getUserStatusThunk(urlId);
    } else if (this.props.isAuth) {
      this.props.setUserProfileThunk(userId);
      this.props.getUserStatusThunk(userId);
    }
  };

  render() {
    return !(this.props.match.params.userID || this.props.userId) ? 
      <Redirect to='/login'/> :
      
        <Profile profile={this.props.profile}
               status={this.props.status}
               setUserStatusThunk={this.props.setUserStatusThunk}
               isAuth={this.props.isAuth}
        />
  };
}

const mapStateToProps = (state) => ({
  profile: state.profileComp.profileInfo,
  status: state.profileComp.status,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth
});
const mapDispatchToProps = {setUserProfile, setUserProfileThunk, getUserStatusThunk, setUserStatusThunk};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);