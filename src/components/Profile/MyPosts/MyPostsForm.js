import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthValidate,
  requiredFields,
} from '../../../services/validators';
import { RenderTextarea } from '../../common/FormControls/FormControls';
import Button from '../../common/Button/Button';

const maxLength10 = maxLengthValidate(10);

const MyPostsForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <h3>My posts</h3>
    <Field
      type="text"
      component={RenderTextarea}
      name="addPostTextArea"
      placeholder="add your post here..."
      validate={[requiredFields, maxLength10]}
    />
    <Button small>Add post</Button>
  </form>
);

export default reduxForm({ form: 'myPostsForm' })(MyPostsForm);
