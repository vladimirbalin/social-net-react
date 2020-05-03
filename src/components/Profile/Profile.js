import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import './Profile.styles.scss';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <section className='profile'>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     setUserStatusThunk={props.setUserStatusThunk}
        />    
      {props.isAuth ? 
      <MyPostsContainer/> :
      null}
    </section>
  );
};

export default Profile;