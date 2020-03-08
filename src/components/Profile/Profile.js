import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.headerImg}>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     setUserStatusThunk={props.setUserStatusThunk}
        />
      </div>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;