import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../redux/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersComp.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID) => {
      dispatch(unFollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
