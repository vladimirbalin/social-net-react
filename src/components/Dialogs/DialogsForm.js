import s from "./Dialogs.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";

const DialogsForm = (props) => {
  return <form onSubmit={props.handleSubmit} className={s.addingMesArea}>
    <Field type={'text'}
           component={'textarea'}
           name={'dialogsTextarea'}/>

    <button type={'submit'}>add message</button>
  </form>
};

export default reduxForm({form: 'dialogsForm'})(DialogsForm);