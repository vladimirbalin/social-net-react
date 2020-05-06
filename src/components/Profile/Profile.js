import React from 'react';
import './Profile.styles.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile, status, setUserStatusThunk, isAuth }) => {
  return (
    <section className='profile'>
        <ProfileInfo profile={profile}
                     status={status}
                     setUserStatusThunk={setUserStatusThunk}
        />    
      {isAuth ? 
      <MyPostsContainer/> :
      null}
    </section>
  );
};

export default Profile;