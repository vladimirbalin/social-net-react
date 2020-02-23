import { NavLink } from "react-router-dom";
import React from "react";
import s from './DialogName.module.css'

const DialogName = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialogName}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogName;