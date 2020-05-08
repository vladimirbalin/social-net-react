import React from "react";
import './ProfileInfoList.scss';
import thumbUpSvg from "../../../../assets/img/like.svg";
import thumbDownSvg from "../../../../assets/img/dislike.svg";

const ProfileInfoItem = ({ contactTitle, contactInfo }) =>
  <div className='profile__item'>
    <span className='profile__subtitles'>{contactTitle}</span>
    <span className='profile__descr'>{contactInfo}</span><br/>
  </div>


const ProfileInfoList = ({ profile }) => {

  return <>
    <ProfileInfoItem contactTitle='info: ' contactInfo={profile.aboutMe}/>
    {profile.lookingForAJob ?
      <><ProfileInfoItem contactTitle='looking for a job?: ' contactInfo={<img className='profile__icon' src={thumbUpSvg} alt='thumbup'/>}/>
        <ProfileInfoItem contactTitle='lookingForAJobDescription: ' contactInfo={profile.lookingForAJobDescription}/>
      </> :
      <ProfileInfoItem contactTitle='looking for a job?: ' contactInfo={<img className='profile__icon' src={thumbDownSvg} alt='thumbup'/>}/>
    }

    <ProfileInfoItem contactTitle='full name: ' contactInfo={profile.fullname}/>
    <ProfileInfoItem contactTitle='about me: ' contactInfo={profile.aboutMe}/>
    <ProfileInfoItem contactTitle='contacts'/>
    <ProfileInfoItem contactTitle='- github: ' contactInfo={profile.contacts.github}/>
    <ProfileInfoItem contactTitle='- vk: ' contactInfo={profile.contacts.vk}/>
    <ProfileInfoItem contactTitle='- facebook: ' contactInfo={profile.contacts.facebook}/>
  </>
};


export default ProfileInfoList;