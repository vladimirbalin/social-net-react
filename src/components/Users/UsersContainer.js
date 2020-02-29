import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount,
  setUsers, toggleIsFetching, unFollow } from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Loader from "../common/Loader/Loader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users`+
    `?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);

        const tooManyPages = response.data.totalCount > 75 ? 75 : response.data.totalCount;
        this.props.setTotalUsersCount(tooManyPages)
      });
  };

  clickPageHandler = (pageClicked) => {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageClicked}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
      });

    this.props.setCurrentPage(pageClicked);

  };

  render() {
    return (
      this.props.isFetching ? <Loader/> :
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               follow={this.props.follow}
               unFollow={this.props.unFollow}
               clickPageHandler={this.clickPageHandler}
               isFetching={this.props.isFetching}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersComp.users,
    pageSize: state.usersComp.pageSize,
    totalUsersCount: state.usersComp.totalUsersCount,
    currentPage: state.usersComp.currentPage,
    isFetching: state.usersComp.isFetching
  }
};



export default connect(mapStateToProps, {follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,})(UsersContainer);
