import React from 'react';
import './Profile.styles.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile, status, setUserStatusThunk, isAuth, isOwner, setUserAvatarThunk, isFetchingAvatar }) => {


  return (
    <section className='profile'>
        <ProfileInfo profile={profile}
                     status={status}
                     setUserStatusThunk={setUserStatusThunk}
                     isOwner={isOwner}
                     setUserAvatarThunk={setUserAvatarThunk}
                     isFetchingAvatar={isFetchingAvatar}
        />    
        
      {isAuth ? 
      <MyPostsContainer/> :
      null}
    </section>
  );
};

export default Profile;