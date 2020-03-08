import React from "react";
import s from './ProfileInfo.module.css';
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
    <img className={s.avatar} src={props.profile.photos.small} alt=''/> :
    <img className={s.avatar} src={userDefaultAvatar} alt=''/>;

  const lfJobIcon = props.profile.lookingForAJob ?
    <img src={thumbUpSvg} alt='thumbup'/> :
    <img src={thumbDownSvg} alt='thumbdown'/>;

  return (
    <div className={s.descriptionBlock}>
      { profileAvatar }
      <ProfileStatus status={props.status}
                     setUserStatusThunk={props.setUserStatusThunk}
      />
      <span className={s.subtitles}>info: </span> {props.profile.aboutMe || 'no info'} <br/>
      <span className={s.subtitles}>looking for a job?: </span> { lfJobIcon } <br/>
      <span className={s.subtitles}>full name: </span> {props.profile.fullName} <br/>
    </div>
  )
};

export default ProfileInfo;