import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Users from "./Users";
import Loader from "../common/Loader/Loader";
import {
  followThunk,
  unfollowThunk,
  getUsersThunk,
  setPortionNumber, SetPortionNumberType
} from "../../redux/users-reducer";
import { withHeader } from "../common/hocs/withHeader/withHeader";
import { RootStateType } from "../../redux/redux-store";
import { UsersType } from "../../types/types";
import { RouteComponentProps } from "react-router-dom";
import { getPageNumber, getPortionNumber } from "../../services/utils";



type MapStatePropsType = {
  users: Array<UsersType>
  itemsCountPerPage: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  disabledButtons: Array<number>
  isAuth: boolean
  portionNumber: number
}
type MapDispatchPropsType = {
  followThunk: (userId: number) => void
  unfollowThunk: (userId: number) => void
  getUsersThunk: (currentPage: number, itemsCountPerPage: number) => void
  setPortionNumber: (portionNumber: number) => SetPortionNumberType
}

type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & RouteComponentProps<any>;

const UsersContainer: React.FC<PropsType> = (props) => {
  const {
    getUsersThunk,
    currentPage,
    itemsCountPerPage,
    totalUsersCount,
    users,
    disabledButtons,
    isAuth,
    isFetching,
    followThunk,
    unfollowThunk,
    setPortionNumber,
    portionNumber,
    location,
    history,
    match
  } = props;

  useEffect(() => {
    const pageNumber = getPageNumber(location.search);
    const portionNumber = getPortionNumber(pageNumber);
    getUsersThunk(pageNumber, itemsCountPerPage);
    setPortionNumber(portionNumber);
  }, [location.search, itemsCountPerPage, getUsersThunk, setPortionNumber])

  const followHandler = (userId: number): void => {
    followThunk(userId);
  };
  const unfollowHandler = (userId: number): void => {
    unfollowThunk(userId);
  };

  return (
    isFetching ? <Loader/> :
      <Users currentPage={currentPage}
             itemsCountPerPage={itemsCountPerPage}
             totalUsersCount={totalUsersCount}
             users={users}
             disabledButtons={disabledButtons}
             follow={followHandler}
             unFollow={unfollowHandler}
             isAuth={isAuth}
             portionNumber={portionNumber}
             setPortionNumber={setPortionNumber}
      />
  )
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
  const {
    users,
    itemsCountPerPage,
    totalUsersCount,
    currentPage,
    isFetching,
    disabledButtons,
    portionNumber
  } = state.usersComp;
  return {
    users,
    itemsCountPerPage,
    totalUsersCount,
    currentPage,
    isFetching,
    disabledButtons,
    isAuth: state.auth.isAuth,
    portionNumber
  }
};
const mapDispatchToProps: MapDispatchPropsType = {
  getUsersThunk,
  followThunk,
  unfollowThunk,
  setPortionNumber
};

export default compose(
  withHeader,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, RootStateType>(mapStateToProps, mapDispatchToProps),
)(UsersContainer);
