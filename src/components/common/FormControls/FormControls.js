import React from "react";
import './FormsControls.styles.scss';
import { MdErrorOutline } from 'react-icons/md';

const CreateFormControl = render => ({ input, label, meta, value, ...rest }) => {
  
    const { submitFailed, error, warning, touched } = meta;
    const hasError = (touched && error && submitFailed);
    let id = new Date().getTime();
    return (
      <div className={hasError ? 'form-wrap error' : 'form-wrap'}>
        {render(input, id, rest)}
        <label htmlFor={id}>{label}</label>
        {hasError &&
        ((error && <span className='form-wrap__active'><MdErrorOutline />{error}</span>) ||
          (warning && <span className='form-wrap__active'><MdErrorOutline />{warning}</span>))}    
      </div>
    )
};

export const RenderInput = CreateFormControl((input, id, rest) => 
  <input id={id} {...input} {...rest}/>
)

export const RenderTextarea = CreateFormControl((input, id, rest) => 
  <textarea id={id} {...input} {...rest} />
)
