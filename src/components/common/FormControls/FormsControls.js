import React from "react";
import './FormsControls.styles.scss';

let id = 0;

const FormControl = ({ label, meta, children }) => {
  const { submitFailed, error, warning, touched } = meta;
  const hasError = (touched && error && submitFailed);
  
  return (
    <div className={hasError ? 'form-wrap error' : 'form-wrap'}>
      {children}
      <label htmlFor={children.props.id}>{label}</label>
      {hasError &&
      ((error && <span className='form-wrap__active'>{error}</span>) ||
        (warning && <span className='form-wrap__active'>{warning}</span>))}    
    </div>
  )
}

export const Textarea = (props) => {
  const { label, input, meta, children, ...otherProps } = props;
  return <FormControl {...props} >
      <textarea id={`form-wrap__textarea${++id}`} {...input} {...otherProps} />
    </FormControl>
};

export const Input = (props) => {
  const { label, input, meta, children, ...otherProps } = props;
  return <FormControl {...props}>
    <input id={`form-wrap__input${++id}`} {...input} {...otherProps} />
    </FormControl>
};