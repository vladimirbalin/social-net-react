import React, { useState, useEffect } from 'react';
import './ProfileInfo.styles.scss';
import Loader from '../../common/Loader/Loader';
import ProfileStatus from './ProfileStatus';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileInfoList from './ProfileInfoList/ProfileInfoList';
import ProfileInfoListEditMode from './ProfileInfoListEditMode/ProfileInfoListEditMode';

const ProfileInfo = ({
  profile,
  status,
  setUserStatusThunk,
  isOwner,
  setUserAvatarThunk,
  isFetchingAvatar,
  isFetchingProfileInfo,
  saveProfile,
  isProfileInfoTransmitted,
  setProfileInfoTransmitted,
}) => {
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    if (isProfileInfoTransmitted) {
      setEditMode(false);
    }
  }, [isProfileInfoTransmitted]);
  if (!profile) {
    return <Loader />;
  }
  const editModeOn = () => {
    setProfileInfoTransmitted(false);
    setEditMode(true);
  };
  const editModeOff = (formData) => {
    saveProfile(formData);
  };

  return (
    <div className="profile__info">
      <ProfileAvatar
        profile={profile}
        isOwner={isOwner}
        setUserAvatarThunk={setUserAvatarThunk}
        isFetchingAvatar={isFetchingAvatar}
      />

      <ProfileStatus status={status} setUserStatusThunk={setUserStatusThunk} />
      {editMode ? (
        <ProfileInfoListEditMode
          initialValues={profile}
          onSubmit={editModeOff}
          profile={profile}
        />
      ) : (
        <ProfileInfoList
          profile={profile}
          editModeOn={editModeOn}
          isFetchingProfileInfo={isFetchingProfileInfo}
        />
      )}
    </div>
  );
};

export default ProfileInfo;
