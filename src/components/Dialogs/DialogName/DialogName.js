import React from "react";
import './DialogName.styles.scss'
import { NavLink } from "react-router-dom";

const DialogName = ({ id, name }) => {
  const path = `/dialogs/${id}`;
  return (
    <div className='dialogs__name'>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogName;