import React from "react";
import './NotFound.styles.scss';

const NotFound = ({ location, history }) => 
  <section className='not-found'>
    <div className='not-found__block'>
      whoops, nothing found here <br/>
      Resource not found at '{location.pathname}'
      <hr/>
      <div className='not-found__goback' onClick={history.goBack}>click to go to previous page</div>
    </div>
  </section>

export default NotFound;