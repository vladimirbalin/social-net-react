import React from "react";
import './ProfileInfo.styles.scss';
import Loader from "../../common/Loader/Loader";
import thumbUpSvg from '../../../assets/img/like.svg';
import thumbDownSvg from '../../../assets/img/dislike.svg';
import userDefaultAvatar from '../../../assets/img/user.svg';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }

  const profileAvatar = props.profile.photos.small ?
    <img className='profile__avatar' src={props.profile.photos.small} alt=''/> :
    <img className='profile__avatar' src={userDefaultAvatar} alt=''/>;

  const lfJobIcon = props.profile.lookingForAJob ?
    <img className='profile__icon' src={thumbUpSvg} alt='thumbup'/> :
    <img className='profile__icon' src={thumbDownSvg} alt='thumbdown'/>;

  return (
    <div className='profile__info'>
      { profileAvatar }
      <ProfileStatus status={props.status}
                     setUserStatusThunk={props.setUserStatusThunk}
      />
      <span className='profile__subtitles'>info: </span> {props.profile.aboutMe || 'no info'} <br/>
      <span className='profile__subtitles'>looking for a job?: </span> { lfJobIcon } <br/>
      <span className='profile__subtitles'>full name: </span> {props.profile.fullName} <br/>
    </div>
  )
};

export default ProfileInfo;