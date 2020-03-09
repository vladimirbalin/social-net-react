import s from "./Users.module.css";
import userSvg from '../../assets/img/user.svg';
import React from "react";
import { NavLink } from "react-router-dom";


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.users}>
      <ul className={s.pages}>
        {pages.map((p, idx) => {

          return <li key={idx} className={props.currentPage === p ? s.selected : null}
                     onClick={() => props.clickPageHandler(p)}>{p}</li>
        })}
      </ul>
      {props.users.map(u => {
        let isCurrentUserFetching = props.isButtonDisabled.some(el => el === u.id);
        let cursorStyle = isCurrentUserFetching ? {'cursor': 'default'} : {'cursor': 'pointer'};
        let followButton;
        u.followed ?
          followButton = <button onClick={() => props.unFollow(u.id)}
                                 disabled={isCurrentUserFetching}
                                 style={cursorStyle}>Unfollow</button> :
          followButton = <button onClick={() => props.follow(u.id)}
                                 disabled={isCurrentUserFetching}
                                 style={cursorStyle}>Follow</button>;

        return (
          <div className={s.users__item} key={u.id}>
            <div className={s.users__left}>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small === null ? userSvg : u.photos.small} alt='userphoto'/>
                </NavLink>
              </div>
              <div>
                {followButton}
              </div>
            </div>
            <div className={s.users__right}>
              <div className={s.users__name}>
                <div>{u.name}</div>
                <div>{u.status === null ? 'no status' : u.status}</div>
              </div>
              <div className={s.users__location}>
                <div>id: {u.id}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

};

export default Users;