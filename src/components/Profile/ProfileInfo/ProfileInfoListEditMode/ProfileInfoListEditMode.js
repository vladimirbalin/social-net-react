import React from "react";
import '../ProfileInfoList/ProfileInfoList.scss';
import { reduxForm } from "redux-form";
import { createField, RenderInput } from "../../../common/FormControls/FormControls";


const ProfileInfoListEditMode = ({ profile, handleSubmit, error }) => {

  return <form className='profile__list' onSubmit={handleSubmit}>
    <button type='submit'>save your changes</button>
    {error && <p className='loginpage__summary-error'>{error}</p>}
    <div className='profile__item'>
      {createField('fullName', 'Full name', '',
        [], RenderInput, 'text', profile.fullName)}
    </div>
    <div className='profile__item'>
      {createField('lookingForAJob', 'Looking for a Job?', '',
        [], RenderInput, 'checkbox', profile.lookingForAJob)}
    </div>
    <div className='profile__item'>
      {createField('lookingForAJobDescription', 'Professional skills', '',
        [], RenderInput, 'text', profile.lookingForAJobDescription)}
    </div>
    <div className='profile__item'>
      {createField('aboutMe', 'About me:', '',
        [], RenderInput, 'text', profile.aboutMe)}
    </div>
    <div className='profile__item'>
      <span className='profile__subtitles'>Contacts</span><br/>
    </div>
    {Object.keys(profile.contacts).map( (website, id) =>
      <div className='profile__item' key={website}>
        {createField(`contacts.${website}`, `- ${website}`, '',
          [], RenderInput, 'text', profile.contacts[website])}
      </div>)}
  </form>;
};


export default reduxForm({form: 'profileInfo'})(ProfileInfoListEditMode);