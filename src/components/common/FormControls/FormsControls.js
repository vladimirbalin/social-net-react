import React from "react";
import './FormsControls.styles.scss';
import { MdErrorOutline } from 'react-icons/md';

const InputHOC = (InputType) => {
  
  const _InputHOC = ({ input, label, meta, ...otherProps }) => {
    const { submitFailed, error, warning, touched } = meta;
    const hasError = (touched && error && submitFailed);
    let id = new Date().getTime();

    return (
      <div className={hasError ? 'form-wrap error' : 'form-wrap'}>
        <InputType id={id} {...input} {...otherProps} />
        <label htmlFor={id}>{label}</label>
        {hasError &&
        ((error && <span className='form-wrap__active'><MdErrorOutline />{error}</span>) ||
          (warning && <span className='form-wrap__active'><MdErrorOutline />{warning}</span>))}    
      </div>
    )
  };
  
  return _InputHOC;
};

export const Textarea = InputHOC('textarea');
export const Input = InputHOC('input');