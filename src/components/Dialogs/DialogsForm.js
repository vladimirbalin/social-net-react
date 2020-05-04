import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredFields } from "../../services/validators";
import { RenderTextarea } from "../common/FormControls/FormControls";



const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='dialogs__form'>
      <Field type='text'
            component={RenderTextarea}
            name='dialogsTextarea'
            validate={[requiredFields]}
            placeholder='add your message here...'
            
      />

      <button type='submit'>add message</button>
    </form>
  )
};

export default reduxForm({form: 'dialogsForm'})(DialogsForm);