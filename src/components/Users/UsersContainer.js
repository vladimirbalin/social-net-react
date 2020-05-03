import { connect } from "react-redux";
import { followThunk, getUsersThunk, setCurrentPageThunk, unfollowThunk } from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Loader from "../common/Loader/Loader";
import { compose } from "redux";

class UsersContainer extends React.Component{
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
  }

  clickPageHandler = pageClicked => {
    if (pageClicked !== this.props.currentPage) {
      this.props.setCurrentPageThunk(pageClicked, this.props.pageSize)
    }
  };
  followHandler = (userId) => {
    this.props.followThunk(userId);
  };
  unfollowHandler = (userId) => {
    this.props.unfollowThunk(userId);
  };

  render() {
    return (
      this.props.isFetching ? <Loader/> :
        <Users {...this.props}
               clickPageHandler={this.clickPageHandler}
               follow={this.followHandler}
               unFollow={this.unfollowHandler}
        />
    )
  }

}
const mapStateToProps = state => {
  return {
    users: state.usersComp.users,
    pageSize: state.usersComp.pageSize,
    totalUsersCount: state.usersComp.totalUsersCount,
    currentPage: state.usersComp.currentPage,
    isFetching: state.usersComp.isFetching,
    isButtonDisabled: state.usersComp.buttonsDisabled,
  }
};
const mapDispatchToProps = {
  getUsersThunk,
  setCurrentPageThunk,
  followThunk,
  unfollowThunk
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer);
