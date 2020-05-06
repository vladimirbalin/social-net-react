import { UsersAPI } from "../services/api";
import { updateObjectInArray } from '../services/objects';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const BUTTON_IS_DISABLED = 'users/BUTTON_IS_DISABLED';

let initialState = {
  users: [],
  pageSize: 5,
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
        users: updateObjectInArray(state.users, 'id', action.userID, {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
       users: updateObjectInArray(state.users, 'id', action.userID, {followed: false})
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

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const response = await UsersAPI.setUsers(currentPage, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
};
export const setCurrentPageThunk = (pageClicked, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const response = await UsersAPI.pageClicked(pageClicked, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items))
  dispatch(setCurrentPage(pageClicked));
};

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleButtonDisable(true, userId));
  const response = await apiMethod(userId);

  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(toggleButtonDisable(false, userId));
  }
};

export const followThunk = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, UsersAPI.follow, follow);
};
export const unfollowThunk = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, UsersAPI.unFollow, unFollow);
};

export default usersReducer;