import React from "react";
import './ProfileInfo.styles.scss';
import Loader from "../../common/Loader/Loader";
import ProfileStatus from './ProfileStatus';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileInfoList from "./ProfileInfoList/ProfileInfoList";

const ProfileInfo = ({ profile, status, setUserStatusThunk, isOwner, setUserAvatarThunk, isFetchingAvatar }) => {

  if (!profile) {
    return <Loader />;
  }



  return (
    <div className='profile__info'>
      <ProfileAvatar profile={profile}
                     isOwner={isOwner}
                     setUserAvatarThunk={setUserAvatarThunk}
                     isFetchingAvatar={isFetchingAvatar}/>

      <ProfileStatus status={status}
                     setUserStatusThunk={setUserStatusThunk}
      />
      <ProfileInfoList profile={profile}/>
    </div>
  )
};

export default ProfileInfo;