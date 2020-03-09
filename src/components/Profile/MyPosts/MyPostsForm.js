import s from "./MyPosts.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";

const MyPostsForm = (props) => {
  return <form onSubmit={props.handleSubmit} className={s.addPostArea}>
    <Field type={'text'}
           component={'textarea'}
           name={'addPostTextarea'}
           className={s.textarea}/>
    <button type='submit'>Add post</button>
  </form>
};


export default reduxForm({form: 'myPostsForm'})(MyPostsForm);