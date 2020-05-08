import React from "react";
import './ProfileAvatar.styles.scss';
import userDefaultAvatar from '../../../../assets/img/user.svg';
import Loader from "../../../common/Loader/Loader";

const ProfileAvatar = ({ profile, isOwner, setUserAvatarThunk, isFetchingAvatar }) => {
  const setUserAvatar = (e) => {
    setUserAvatarThunk(e.target.files[0]);
  };

  return (
      <div className='profile__avatar-block'>
        {isFetchingAvatar ? <Loader/> :
            <><img className='profile__avatar' src={profile.photos.small ||
                                                userDefaultAvatar} alt=''/>
          {isOwner && <><input type='file'
                               name="file"
                               id="file"
                               className="inputfile"
                               onChange={setUserAvatar}/>
                        <label htmlFor="file">cменить аватар</label>
                      </>}
        </>}
      </div>
  )
};

export default ProfileAvatar;