import React from 'react';
import './Users.styles.scss';
import User from './User';
import { Pagination } from '../common/Pagination/Pagination';
// import  Pagination from "react-js-pagination";
import { UsersType } from '../../types/types';
import { withRouter } from 'react-router-dom';
import { SetPortionNumberType } from '../../redux/users-reducer';

type UsersPropsType = {
  currentPage: number;
  itemsCountPerPage: number;
  totalUsersCount: number;
  users: Array<UsersType>;
  disabledButtons: Array<number>;
  unFollow: (id: number) => void;
  follow: (id: number) => void;
  isAuth: boolean;
  portionNumber: number;
  setPortionNumber: (portionNumber: number) => SetPortionNumberType;
  match: any;
  location: any;
  history: any;
};

const Users: React.FC<UsersPropsType> = ({
  currentPage,
  itemsCountPerPage,
  totalUsersCount,
  users,
  disabledButtons,
  unFollow,
  follow,
  isAuth,
  portionNumber,
  setPortionNumber,
  match,
}) => (
  <section className="users">
    {/*<Pagination activePage={currentPage}*/}
    {/*            itemsCountPerPage={itemsCountPerPage}*/}
    {/*            totalItemsCount={totalUsersCount}*/}
    {/*            pageRangeDisplayed={10}*/}
    {/*            onChange={clickPageHandler}*/}
    {/*            innerClass='users__pages'*/}
    {/*            itemClass='users__btn-paginator'*/}
    {/*            activeLinkClass='users__selected'*/}
    {/*            linkClass='users__links'*/}
    {/*            hideDisabled={false}*/}
    {/*            hideNavigation={true}*/}
    {/*            getPageUrl={(currentPage) => `${match.url}?page=${currentPage}`}*/}
    {/*/>*/}
    <Pagination
      totalUsersCount={totalUsersCount}
      currentPage={currentPage}
      itemsCountPerPage={itemsCountPerPage}
      url={match.url}
      portionSize={10}
      setPortionNumber={setPortionNumber}
      portionNumber={portionNumber}
    />
    {users.map((u) => (
      <User
        key={u.id}
        id={u.id}
        smallPhoto={u.photos.small}
        follow={follow}
        unFollow={unFollow}
        name={u.name}
        status={u.status}
        isFollowed={u.followed}
        disabledButtons={disabledButtons}
        isAuth={isAuth}
      />
    ))}
  </section>
);

export default withRouter(Users);
