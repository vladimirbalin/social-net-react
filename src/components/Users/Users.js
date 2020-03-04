import s from "./Users.module.css";
import photoUrl from "../../assets/img/dmitriy.jpg";
import React from "react";
import { NavLink } from "react-router-dom";


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++){
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
        return (
          <div className={s.users__item} key={u.id}>
            <div className={s.users__left}>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small === null ? photoUrl : u.photos.small} alt='userphoto'/>
                </NavLink>
                </div>
              <div>
                {u.followed ?
                  <span onClick={() => props.unFollow(u.id)}>Unfollow</span> :
                  <span onClick={() => props.follow(u.id)}>Follow</span>}
              </div>
            </div>
            <div className={s.users__right}>
              <div className={s.users__name}>
                <div>{u.name}</div>
                <div>{u.status === null ? 'no status' : u.status}</div>
              </div>
              <div className={s.users__location}>
                <div>country: {'u.location.country'}</div>
                <div>city: {'u.location.city'}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

};

export default Users;