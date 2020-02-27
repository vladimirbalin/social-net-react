import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {

  return (
    <div className={s.profile}>
      <div className={s.headerImg} />
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;