import React from 'react';
import './ProfileInfoListItem.scss';
import {
  createField,
  RenderInput,
} from '../../../common/FormControls/FormControls';

const ProfileInfoListItem = ({ contactTitle, contactInfo }) => (
  <div className="profile__item">
    <span className="profile__subtitles">{contactTitle}</span>
    <span className="profile__descr">{contactInfo}</span>
    <br />
  </div>
);

export default ProfileInfoListItem;

export const ProfileInfoEditModeListItem = ({
  contactTitle,
  type,
  contactInfo,
  name,
}) => (
  <div className="profile__item-edit">
    {createField(
      name,
      contactTitle,
      'enter your znachenie',
      [],
      RenderInput,
      type,
      contactInfo
    )}
  </div>
);
