import React from 'react';
import './Profile.styles.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ isAuth, ...props}) => {


  return (
    <section className='profile'>
        <ProfileInfo {...props}/>    
        
      {isAuth ? 
      <MyPostsContainer/> :
      null}
    </section>
  );
};

export default Profile;