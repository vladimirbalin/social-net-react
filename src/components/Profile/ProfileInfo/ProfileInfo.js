import React from "react";
import './ProfileInfo.styles.scss';
import Loader from "../../common/Loader/Loader";
import thumbUpSvg from '../../../assets/img/like.svg';
import thumbDownSvg from '../../../assets/img/dislike.svg';
import userDefaultAvatar from '../../../assets/img/user.svg';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({ profile, status, setUserStatusThunk }) => {
  if (!profile) {
    return <Loader />;
  }

  const profileAvatar = profile.photos.small ?
    <img className='profile__avatar' src={profile.photos.small} alt=''/> :
    <img className='profile__avatar' src={userDefaultAvatar} alt=''/>;

  const lfJobIcon = profile.lookingForAJob ?
    <img className='profile__icon' src={thumbUpSvg} alt='thumbup'/> :
    <img className='profile__icon' src={thumbDownSvg} alt='thumbdown'/>;

  return (
    <div className='profile__info'>
      { profileAvatar }
      <ProfileStatus status={status}
                     setUserStatusThunk={setUserStatusThunk}
      />
      <span className='profile__subtitles'>info: </span> {profile.aboutMe || 'no info'} <br/>
      <span className='profile__subtitles'>looking for a job?: </span> { lfJobIcon } <br/>
      <span className='profile__subtitles'>full name: </span> {profile.fullName} <br/>
    </div>
  )
};

export default ProfileInfo;