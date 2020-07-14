import React from "react";
import './FormsControls.styles.scss';
import { MdErrorOutline } from 'react-icons/md';
import { Field } from "redux-form";

const CreateFormControl = render => ({ input, label, meta: { submitFailed, error, warning, touched }, value, ...rest }) => {
  const hasError = (touched && error && submitFailed);
  let id = Date.now();
  return (
    <div className={hasError ? 'form-wrap error' : 'form-wrap'}>
      {render(input, id, rest)}
      <label htmlFor={id}>{label}</label>
      {hasError &&
      ((error && <span className='form-wrap__active'><MdErrorOutline/>{error}</span>) ||
        (warning && <span className='form-wrap__active'><MdErrorOutline/>{warning}</span>))}
    </div>
  )
};

export const RenderInput = CreateFormControl((input, id, rest) =>
  <input id={id} {...input} {...rest}/>
);

export const RenderTextarea = CreateFormControl((input, id, rest) =>
  <textarea id={id} {...input} {...rest} />
);

export const createField = (name, label, placeholder,
                            validators, component, type,
                            value) =>
  <Field name={name}
         label={label}
         placeholder={placeholder}
         component={component}
         validate={validators}
         type={type}
         value={value}
  />;