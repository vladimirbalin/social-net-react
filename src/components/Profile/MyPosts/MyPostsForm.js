import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './MyPosts.module.css'
import { maxLengthValidate, requiredFields } from "../../../services/validators";
import { Textarea } from "../../common/FormControls/FormsControls";

const maxLength10 = maxLengthValidate(10);

const MyPostsForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <Field type='text'
           component={Textarea}
           label='My posts'
           name='addPostTextArea'
           placeholder='add your post here...'
           formProp={s.addPostAreaX}
           validate={[requiredFields, maxLength10]}
    />
    <button type='submit'>Add post</button>
  </form>
};


export default reduxForm({form: 'myPostsForm'})(MyPostsForm);