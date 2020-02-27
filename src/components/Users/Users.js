import React from 'react';

import s from './Users.module.css'
import photoUrl from "../../assets/img/dmitriy.jpg";

let Users = (props) => {
  if (props.users.length === 0){
    props.setUsers(
      [
        {
        id: 1,
        followed: false,
        photoUrl: photoUrl,
        fullName: 'Dmitriy',
        status: 'I\'m Boss',
        location: {city: 'Minsk', country: 'Belarus'}
      },
        {
        id: 2,
        followed: true,
        photoUrl: photoUrl,
        fullName: 'Valera',
        status: 'I\'m Boss too',
        location: {city: 'Kiev', country: 'Ukraine'}
      },
        {
        id: 3,
        followed: false,
        photoUrl: photoUrl,
        fullName: 'Nadezhda',
        status: 'I\'m Boss here',
        location: {city: 'Almaty', country: 'Kazakhstan'}
      }
      ]
    );
  }
  return <div className={s.users}>
    {props.users.map(u => {

      const unfollowHandler = (event) => {
        event.preventDefault();
        props.unfollow(u.id);
      };
      const followHandler = (event) => {
        event.preventDefault();
        props.follow(u.id);
      };

     return <div className={s.users__item} key={u.id}>
        <div>
          <div>
            <img src={u.photoUrl}/>
          </div>
          <div>
            {u.followed ? <a href="#" onClick={unfollowHandler} >Unfollow</a> :
                          <a href="#" onClick={followHandler} >Follow</a>}
          </div>
        </div>
        <div className={s.users__right}>
          <div className={s.users__name}>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </div>
          <div className={s.users__location}>
            <div>country: {u.location.country}</div>
            <div>city: {u.location.city}</div>
          </div>
        </div>
      </div>})
    }
  </div>
};

export default Users;