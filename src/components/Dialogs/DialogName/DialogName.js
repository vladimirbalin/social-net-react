import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const DialogName = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialogName}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogName;