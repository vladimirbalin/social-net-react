import React from 'react';
import { NavLink } from 'react-router-dom';

const User = ({ id, smallPhoto, followButton, name, status }) => {
  return (
    <div className='users__item'>
      <div className='users__left'>
      <div>
        <NavLink to={'/profile/' + id}>
          <img src={smallPhoto === null ? `http://robohash.org/${id}?set=set4` : smallPhoto} alt={id + 'photo'}/>
        </NavLink>
      </div>
      <div>
        {followButton}
      </div>
      </div>
      <div className='users__right'>
      <div className='users__name'>
        <div><span>nickname: </span>{name}</div>
        <div><span>status: </span>{status === null ? 'no status' : status}</div>
        <div><span>id: </span>{id}</div>
      </div>
    </div>
  </div>);
}

  export default User;
