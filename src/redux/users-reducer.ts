import { UsersAPI } from "../services/api";
import { updateObjectInArray } from '../services/objects';
import { UsersType } from "../types/types";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const BUTTON_IS_DISABLED = 'users/BUTTON_IS_DISABLED';


let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false,
  buttonsDisabled: [] as Array<number>
};
export type InitialStateType = typeof initialState;

const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
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
type FollowActionType = {type: typeof FOLLOW, userID: number};
export const follow = (userID: number): FollowActionType => ({type: FOLLOW, userID});

type UnFollowActionType = {type: typeof UNFOLLOW, userID: number};
export const unFollow = (userID: number): UnFollowActionType => ({type: UNFOLLOW, userID});

type SetUsersActionType = {type: typeof SET_USERS, users: Array<UsersType>};
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users});

type SetCurrentPageActionType = {type: typeof SET_CURRENT_PAGE, currentPage: number};
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

type SetTotalUsersCountActionType = {type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number};
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount
});

type ToggleIsFetchingActionType = {type: typeof TOGGLE_IS_FETCHING, isFetching: boolean};
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

type ToggleButtonDisableActionType = {type: typeof BUTTON_IS_DISABLED, isFetching: boolean, buttonsDisabled: number};
export const toggleButtonDisable = (isFetching: boolean, buttonsDisabled: number): ToggleButtonDisableActionType => ({
  type: BUTTON_IS_DISABLED,
  isFetching,
  buttonsDisabled
});

export const getUsersThunk = (currentPage: number, pageSize: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  const response = await UsersAPI.setUsers(currentPage, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
};
export const setCurrentPageThunk = (pageClicked: number, pageSize: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  const response = await UsersAPI.pageClicked(pageClicked, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items))
  dispatch(setCurrentPage(pageClicked));
};

export const followUnfollowFlow = async (dispatch: any, userId: number,
                                         apiMethod: any, actionCreator: any) => {
  dispatch(toggleButtonDisable(true, userId));
  const response = await apiMethod(userId);

  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(toggleButtonDisable(false, userId));
  }
};

export const followThunk = (userId: number) => (dispatch: any) => {
  followUnfollowFlow(dispatch, userId, UsersAPI.follow, follow);
};
export const unfollowThunk = (userId: number) => (dispatch: any) => {
  followUnfollowFlow(dispatch, userId, UsersAPI.unFollow, unFollow);
};

export default usersReducer;