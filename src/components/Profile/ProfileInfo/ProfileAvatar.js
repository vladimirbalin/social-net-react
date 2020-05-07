import React from "react";
import './ProfileAvatar.styles.scss';
import userDefaultAvatar from '../../../assets/img/user.svg';

const ProfileAvatar = ({ profile, avatarUploadSucceeded, isOwner, setUserAvatarThunk }) => {
  const setUserAvatar = (e) => {
    setUserAvatarThunk(e.target.files[0]);
  };

  return (
      <div className='profile__avatar-block'>
        { <img className='profile__avatar' src={avatarUploadSucceeded || 
                                                profile.photos.small || 
                                                userDefaultAvatar} alt=''/> }
        {isOwner && <><input type='file' name="file" id="file" className="inputfile" onChange={setUserAvatar}/>
                          <label htmlFor="file"><img src="https://image.flaticon.com/icons/svg/126/126472.svg" alt="edit-icon"></img></label></>}
      </div>
  )
};

export default ProfileAvatar;