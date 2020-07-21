import React from 'react';
import './404.styles.scss';
import { NavLink } from 'react-router-dom';

const NotFound = ({ location }) => (
  <section className="not-found">
    <div className="not-found__block">
      whoops, nothing found here <br />
      Resource not found at '{location.pathname}'
      <hr />
      <NavLink to="/" className="not-found__goback">
        click to go to main page
      </NavLink>
    </div>
  </section>
);

export default NotFound;
