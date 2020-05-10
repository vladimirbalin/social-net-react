import React from "react";
import './ProfileInfoList.scss';
import Loader from "../../../common/Loader/Loader";


const ProfileInfoList = ({ profile, editModeOn, isFetchingProfileInfo }) => {

  return <div className='profile__list'>
    {isFetchingProfileInfo ? <Loader /> :
      <><button onClick={editModeOn}>edit profile</button>
      <div className='profile__item'>
        <span className='profile__subtitles'>Full name</span>
        <span className='profile__descr'>{profile.fullName}</span><br/>
      </div>
      <div className='profile__item'>
        <span className='profile__subtitles'>Looking for a Job?</span>
        <span className='profile__descr'>{profile.lookingForAJob ? 'yes' : 'no'}</span><br/>
      </div>
      <div className='profile__item'>
        <span className='profile__subtitles'>Professional skills</span>
        <span className='profile__descr'>{profile.lookingForAJobDescription}</span><br/>
      </div>
      <div className='profile__item'>
        <span className='profile__subtitles'>About me:</span>
        <span className='profile__descr'>{profile.aboutMe}</span><br/>
      </div>
      <div className='profile__item'>
        <span className='profile__subtitles'>Contacts</span><br/>
      </div>
        {Object.keys(profile.contacts).map( website =>
          <div className='profile__item' key={website}>
            <span className='profile__subtitles'>- {website}</span>
            <span className='profile__descr'>{profile.contacts[website]}</span><br/>
          </div>)}
      </>}

  </div>;
};


export default ProfileInfoList;