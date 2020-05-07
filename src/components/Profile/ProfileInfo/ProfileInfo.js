import React from "react";
import './ProfileInfo.styles.scss';
import Loader from "../../common/Loader/Loader";
import thumbUpSvg from '../../../assets/img/like.svg';
import thumbDownSvg from '../../../assets/img/dislike.svg';
import ProfileStatus from './ProfileStatus';
import ProfileAvatar from './ProfileAvatar';

const ProfileInfo = ({ profile, status, setUserStatusThunk, avatarUploadSucceeded, isOwner, setUserAvatarThunk }) => {

  if (!profile) {
    return <Loader />;
  };

  const lfJobIcon = profile.lookingForAJob ?
    <img className='profile__icon' src={thumbUpSvg} alt='thumbup'/> :
    <img className='profile__icon' src={thumbDownSvg} alt='thumbdown'/>;

  return (
    <div className='profile__info'>
      <div className='profile__avatar-block'>
       <ProfileAvatar profile={profile} 
                      avatarUploadSucceeded={avatarUploadSucceeded} 
                      isOwner={isOwner}
                      setUserAvatarThunk={setUserAvatarThunk} />
      </div>
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