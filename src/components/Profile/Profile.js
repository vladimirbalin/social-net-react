import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';

const Profile = ({profileComp, dispatch}) => {

  return (
    <div className={s.profile}>
      <div className={s.headerImg} />

      <ProfileInfo />
      <MyPosts profileComp={profileComp}
               dispatch={dispatch} />
    </div>
  );
};

export default Profile;