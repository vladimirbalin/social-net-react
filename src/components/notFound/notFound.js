import React from "react";
import s from './notFound.module.css'

const NotFound = ({location, history}) => {
  return (
    <div className={s.notFound}>
      <div className={s.block}>
        whoops, nothing found here <br/>
        Resource not found at '{location.pathname}'
        <hr/>
        <div className={s.goBack} onClick={history.goBack}>click to go to previous page</div>
      </div>
    </div>
  )
};

export default NotFound;