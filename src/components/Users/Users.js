import "./Users.styles.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import Pagination from "react-js-pagination";

export default function Users(props) {

  return (
    <section className='users'>
      <Pagination activePage={props.currentPage}
                  itemsCountPerPage={props.pageSize}
                  totalItemsCount={props.totalUsersCount}
                  pageRangeDisplayed={5}
                  onChange={props.clickPageHandler}
                  innerClass='users__pages'
                  itemClass='users__pbutton'
                  activeLinkClass='users__selected'
                  linkClass='users__links'
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
          <div className='users__item' key={u.id}>
            <div className='users__left'>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  {/*<img src={u.photos.small === null ? userSvg : u.photos.small} alt='u.id + 'photo''/>*/}
                  <img src={u.photos.small === null ? `http://robohash.org/${u.id}?set=set4` : u.photos.small} alt={u.id + 'photo'}/>
                </NavLink>
              </div>
              <div>
                {followButton}
              </div>
            </div>
            <div className='users__right'>
              <div className='users__name'>
                <div><span>nickname: </span>{u.name}</div>
                <div><span>status: </span>{u.status === null ? 'no status' : u.status}</div>
                <div><span>id: </span>{u.id}</div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
};