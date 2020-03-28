import { UsersAPI } from "../services/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const BUTTON_IS_DISABLED = 'BUTTON_IS_DISABLED';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  buttonsDisabled: []
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          return u.id === action.userID ? {...u, followed: true} : u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          return u.id === action.userID ? {...u, followed: false} : u;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case BUTTON_IS_DISABLED:
      return {
        ...state,
        buttonsDisabled: action.isFetching ?
          [...state.buttonsDisabled, action.buttonsDisabled] :
          state.buttonsDisabled.filter(id => id !== action.buttonsDisabled)
      }
        ;
    default:
      return state;
  }

};

export const follow = (userID) => ({type: FOLLOW, userID});
export const unFollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleButtonDisable = (isFetching, buttonsDisabled) => ({
  type: BUTTON_IS_DISABLED,
  isFetching,
  buttonsDisabled
});

export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    UsersAPI.setUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      });
  }
};
export const setCurrentPageThunk = (pageClicked, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    UsersAPI.pageClicked(pageClicked, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items))
      });

    dispatch(setCurrentPage(pageClicked));
  }
};
export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleButtonDisable(true, userId));
    UsersAPI.follow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(follow(userId));
          dispatch(toggleButtonDisable(false, userId));
        }
      })
  }
};
export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleButtonDisable(true, userId));
    UsersAPI.unFollow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unFollow(userId));
          dispatch(toggleButtonDisable(false, userId));
        }
      })
  }
};

export default usersReducer;