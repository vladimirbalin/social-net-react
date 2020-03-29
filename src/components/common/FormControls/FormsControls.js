import React from "react";
import s from './FormsControls.module.css'

export const Textarea = ({label, input, meta, formProp, ...props }) => {
  const {submitFailed, error, warning, touched } = meta;
  const hasError = (touched && error && submitFailed);

  return <div className={hasError ? formProp + ' ' + s.error : formProp}>
    <label>{label}</label>
    <div className={s.width}>
      <textarea {...input} {...props} />
      {hasError &&
      ((error && <span className={s.active}>{error}</span>) ||
        (warning && <span className={s.active}>{warning}</span>))}
    </div>
  </div>
};

export const Input = ({label, input, meta, formProp, ...props }) => {
  const {submitFailed, error, warning, touched } = meta;
  const hasError = (touched && error && submitFailed);
  return <div className={hasError ? formProp + ' ' + s.error : formProp}>
    <label>{label}</label>
    <div className={s.width}>
      <input {...input} {...props} />
      {hasError &&
      ((error && <span className={s.active}>{error}</span>) ||
        (warning && <span className={s.active}>{warning}</span>))}
    </div>
  </div>
};