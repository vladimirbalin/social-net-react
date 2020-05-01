import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import './Profile.styles.scss';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <section className='profile'>
      <div className='profile__img'>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     setUserStatusThunk={props.setUserStatusThunk}
        />
      </div>
      <MyPostsContainer/>
    </section>
  );
};

export default Profile;