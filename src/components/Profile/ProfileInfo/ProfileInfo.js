import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={s.descriptionBlock}>
      <img className={s.avatar} style={{width: 120, height: 100}} src='https://seeklogo.com/images/H/hello-kitty-logo-1BB9766AB2-seeklogo.com.png'/>
      ava descr
    </div>)
};

export default ProfileInfo;