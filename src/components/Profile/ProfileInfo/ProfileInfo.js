import React from "react";
import s from './ProfileInfo.module.css';
import Loader from "../../common/Loader/Loader";
import likeSvg from '../../../assets/img/like.svg';
import dislikeSvg from '../../../assets/img/dislike.svg';
import userSvg from '../../../assets/img/user.svg';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div className={s.descriptionBlock}>
      {props.profile.photos.small ?
        <img className={s.avatar} src={props.profile.photos.small} alt=''/> :
        <img className={s.avatar} src={userSvg} alt=''/>
      }

      <span className={s.subtitles}>info: </span> {props.profile.aboutMe || 'no info'} <br/>
      <span className={s.subtitles}>looking for a job?: </span> {props.profile.lookingForAJob ?
                                                                <img src={likeSvg} alt='thumbup'/> :
                                                                <img src={dislikeSvg} alt='thumbdown'/>} <br/>
      <span className={s.subtitles}>full name: </span> {props.profile.fullName} <br/>
    </div>
  )
};

export default ProfileInfo;