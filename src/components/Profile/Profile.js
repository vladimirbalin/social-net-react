import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.headerImg} />

      <ProfileInfo />
      <MyPosts postData={props.profileComp.postData} />
    </div>
  );
};

export default Profile;