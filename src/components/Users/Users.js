import s from "./Users.module.css";
import userSvg from '../../assets/img/user.svg';
import React from "react";
import { NavLink } from "react-router-dom";
import Pagination from "react-js-pagination";


export default function Users(props) {

  return (
    <div className={s.users}>
      <Pagination activePage={props.currentPage}
                  itemsCountPerPage={props.pageSize}
                  totalItemsCount={props.totalUsersCount}
                  pageRangeDisplayed={5}
                  onChange={props.clickPageHandler}
                  innerClass={s.pages}
                  itemClass={s.pages__item}
                  activeLinkClass={s.pages__selected}
                  linkClass={s.pages__links}
                  hideDisabled={true}
                  hideNavigation={true}
      />

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
                <div><span>nickname: </span>{u.name}</div>
                <div><span>status: </span>{u.status === null ? 'no status' : u.status}</div>
                <div><span>id: </span>{u.id}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
};