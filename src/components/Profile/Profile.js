import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'


const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.headerImg}></div>
      <ProfileInfo />
      <MyPosts />
    </div>

  );
};

export default Profile;