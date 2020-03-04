import { connect } from "react-redux";
import {
  follow, setCurrentPage, setTotalUsersCount,
  setUsers, toggleIsFetching, unFollow
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Loader from "../common/Loader/Loader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users` +
      `?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);

        const tooManyPages = response.data.totalCount > 75 ? 75 : response.data.totalCount;
        this.props.setTotalUsersCount(tooManyPages)
      });
  };

  clickPageHandler = (pageClicked) => {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageClicked}&count=${this.props.pageSize}`, {withCredentials: true})
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
      });

    this.props.setCurrentPage(pageClicked);

  };
  followHandler = (userId) => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
      {
        withCredentials: true,
        headers: {
          'API-KEY': '9e23b615-1168-457b-a503-b96b4e45cbb7'
        }
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          this.props.follow(userId)
        }
      })
  };
  unfollowHandler = (userId) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
      withCredentials: true,
      headers: {
        'API-KEY': '9e23b615-1168-457b-a503-b96b4e45cbb7'
      }
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          this.props.unFollow(userId)
        }
      })
  };

  render() {
    return (
      this.props.isFetching ? <Loader/> :
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               follow={this.followHandler}
               unFollow={this.unfollowHandler}
               clickPageHandler={this.clickPageHandler}
               isFetching={this.props.isFetching}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersComp.users,
    pageSize: state.usersComp.pageSize,
    totalUsersCount: state.usersComp.totalUsersCount,
    currentPage: state.usersComp.currentPage,
    isFetching: state.usersComp.isFetching
  }
};


export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
