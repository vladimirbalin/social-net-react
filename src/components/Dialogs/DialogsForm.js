import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredFields } from '../../services/validators';
import { RenderTextarea } from '../common/FormControls/FormControls';
import Button from '../common/Button/Button';

const DialogsForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="dialogs__form">
      <Field
        type="text"
        component={RenderTextarea}
        name="dialogsTextarea"
        validate={[requiredFields]}
        placeholder="add your message here..."
      />
      <Button>Add message</Button>
    </form>
  );
};

export default reduxForm({ form: 'dialogsForm' })(DialogsForm);
