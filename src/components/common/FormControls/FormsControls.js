import React from "react";
import s from './FormsControls.module.css'

const FormControl = ({label, meta, formProp, children}) => {
  const {submitFailed, error, warning, touched } = meta;
  const hasError = (touched && error && submitFailed);

  return <div className={hasError ? formProp + ' ' + s.error : formProp}>
    <label>{label}</label>
    <div className={s.width}>
      {children}
      {hasError &&
      ((error && <span className={s.active}>{error}</span>) ||
        (warning && <span className={s.active}>{warning}</span>))}
    </div>
  </div>
}

export const Textarea = (props) => {
  const {label, input, meta, formProp, children, ...otherProps } = props;
  return <FormControl {...props} >
      <textarea {...input} {...otherProps} />
    </FormControl>
};

export const Input = (props) => {
  const {label, input, meta, formProp, children, ...otherProps } = props;
  return <FormControl {...props}>
    <input {...input} {...otherProps} />
    </FormControl>
};