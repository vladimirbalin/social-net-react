import { NavLink } from "react-router-dom";
import React from "react";
import './DialogName.styles.scss'

const DialogName = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className='dialogs__name'>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogName;