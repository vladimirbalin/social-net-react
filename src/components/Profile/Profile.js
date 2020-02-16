import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div  className={s.content}>
      <img style={{width: '100%', height: 100}} src='http://garrys.net.ua/wp-content/themes/linia/img/header-img.png'/>
      <div>
        <img style={{width: 120, height: 100}}src='https://seeklogo.com/images/H/hello-kitty-logo-1BB9766AB2-seeklogo.com.png'/>
        ava descr
      </div>
      <MyPosts />
    </div>

  );
};

export default Profile;