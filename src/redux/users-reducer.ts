import { UsersAPI } from "../services/api";
import { updateObjectInArray } from '../services/utils';
import { UsersType } from "../types/types";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootStateType } from "./redux-store";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const BUTTON_IS_DISABLED = 'users/BUTTON_IS_DISABLED';
const SET_PORTION_NUMBER = 'users/SET_PORTION_NUMBER';


let initialState = {
  users: [] as Array<UsersType>,
  itemsCountPerPage: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false,
  disabledButtons: [] as Array<number>,
  portionNumber: 1
};
export type UsersStateType = typeof initialState;

const usersReducer = (state = initialState, action: UsersActionsType): UsersStateType => {
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
        disabledButtons: action.isFetching ?
          [...state.disabledButtons, action.disabledButtons] :
          state.disabledButtons.filter(id => id !== action.disabledButtons)
      };
    case SET_PORTION_NUMBER:
      return {
        ...state,
        portionNumber: action.portionNumber
      };
    default:
      return state;
  }
};
type UsersActionsType =
  FollowActionType
  | UnFollowActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | ToggleIsFetchingActionType
  | ToggleButtonDisableActionType
  | SetPortionNumberType

/*---actions---*/
type FollowActionType = {type: typeof FOLLOW, userID: number};
export const follow = (userID: number): FollowActionType => ({type: FOLLOW, userID});

type UnFollowActionType = {type: typeof UNFOLLOW, userID: number};
export const unFollow = (userID: number): UnFollowActionType => ({type: UNFOLLOW, userID});

type SetUsersActionType = {type: typeof SET_USERS, users: Array<UsersType>};
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users});

export type SetCurrentPageActionType = {type: typeof SET_CURRENT_PAGE, currentPage: number};
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

type ToggleButtonDisableActionType = {type: typeof BUTTON_IS_DISABLED, isFetching: boolean, disabledButtons: number};
export const toggleButtonDisable = (isFetching: boolean, disabledButtons: number): ToggleButtonDisableActionType => ({
  type: BUTTON_IS_DISABLED,
  isFetching,
  disabledButtons
});

export type SetPortionNumberType = {type: typeof SET_PORTION_NUMBER, portionNumber: number};
export const setPortionNumber = (portionNumber: number): SetPortionNumberType => ({
  type: SET_PORTION_NUMBER,
  portionNumber
})

/*---thunks---*/
type UsersThunkType = ThunkAction<Promise<void>, RootStateType, unknown, UsersActionsType>;
export const getUsersThunk = (currentPage: number, itemsCountPerPage: number): UsersThunkType =>
  async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await UsersAPI.setUsers(currentPage, itemsCountPerPage);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setCurrentPage(currentPage));
  };

export const followUnfollowFlow = async (dispatch: Dispatch<UsersActionsType>,
                                         userId: number,
                                         apiMethod: any,
                                         actionCreator: (userId: number) => FollowActionType | UnFollowActionType) => {
  dispatch(toggleButtonDisable(true, userId));
  const response = await apiMethod(userId);

  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(toggleButtonDisable(false, userId));
  }
};
export const followThunk = (userId: number): UsersThunkType => async (dispatch) => {
  await followUnfollowFlow(dispatch, userId, UsersAPI.follow, follow);
};
export const unfollowThunk = (userId: number): UsersThunkType => async (dispatch) => {
  await followUnfollowFlow(dispatch, userId, UsersAPI.unFollow, unFollow);
};

export default usersReducer;