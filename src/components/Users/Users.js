import React from "react";
import "./Users.styles.scss";
import User from './User';
import Pagination from "react-js-pagination";

const Users = ({ currentPage, pageSize, totalUsersCount, clickPageHandler, 
                                users, isButtonDisabled, unFollow, follow }) =>
    <section className='users'>
      <Pagination activePage={currentPage}
                  itemsCountPerPage={pageSize}
                  totalItemsCount={totalUsersCount}
                  pageRangeDisplayed={5}
                  onChange={clickPageHandler}
                  innerClass='users__pages'
                  itemClass='users__pbutton'
                  activeLinkClass='users__selected'
                  linkClass='users__links'
                  hideDisabled={true}
                  hideNavigation={true}
      />

      {users.map(u => {
        let isCurrentUserFetching = isButtonDisabled.some(el => el === u.id);
        let cursorStyle = isCurrentUserFetching ? {'cursor': 'default'} : {'cursor': 'pointer'};
        let followButton;
        u.followed ?
          followButton = <button onClick={() => unFollow(u.id)}
                                 disabled={isCurrentUserFetching}
                                 style={cursorStyle}>Unfollow</button> :
          followButton = <button onClick={() => follow(u.id)}
                                 disabled={isCurrentUserFetching}
                                 style={cursorStyle}>Follow</button>;

        return (
          <User key={u.id} id={u.id} smallPhoto={u.photos.small}
                followButton={followButton} name={u.name} status={u.status} />
        )
      })}
    </section>

export default Users;