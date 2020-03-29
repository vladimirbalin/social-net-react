import s from "./Dialogs.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredFields } from "../../services/validators";
import { Textarea } from "../common/FormControls/FormsControls";



const DialogsForm = (props) => {
  return <form onSubmit={props.handleSubmit} className={s.addingMesArea}>
    <Field type={'text'}
           component={Textarea}
           name={'dialogsTextarea'}
           validate={[requiredFields]}
           placeholder='add your message here...'
    />

    <button type={'submit'}>add message</button>
  </form>
};

export default reduxForm({form: 'dialogsForm'})(DialogsForm);