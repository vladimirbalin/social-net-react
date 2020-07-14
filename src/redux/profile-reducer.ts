import { ProfileAPI } from "../services/api";
import { FormAction, stopSubmit } from "redux-form";
import { PhotosType, PostsType, ProfileInfoType } from '../types/types';
import { ThunkAction } from "redux-thunk";
import { RootStateType } from "./redux-store";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const SET_USER_AVATAR = 'profile/SET_USER_AVATAR';
const SET_FETCHING_AVATAR = 'profile/SET_FETCHING_AVATAR';
const SET_FETCHING_PROFILE_INFO = 'profile/SET_FETCHING_PROFILE_INFO';
const SET_PROFILE_INFO_TRANSMITTED = 'profile/SET_PROFILE_INFO_TRANSMITTED';

let id = 100;

let initialState = {
  posts: [
    {
      id: 1, message: 'Hi, how are you??Hi, how are you??Hi, how are you??' +
        'Hi, how are you??Hi, how are you??Hi, how are you??', likesCount: 25
    },
    {id: 2, message: 'That\'s my first message', likesCount: 15},
    {id: 3, message: 'Hi, how are you??', likesCount: 39},
  ] as Array<PostsType>,
  profileInfo: null as ProfileInfoType | null,
  status: '',
  isFetchingAvatar: false,
  isFetchingProfileInfo: false,
  isProfileInfoTransmitted: false
};
export type ProfileStateType = typeof initialState;

const profileReducer = (state = initialState, action: ProfileActionsType): ProfileStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: id++,
        message: action.text,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profileInfo: action.profileInfo
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      };
    case SET_USER_AVATAR:
      return {
        ...state,
        profileInfo: {...state.profileInfo, photos: action.photo} as ProfileInfoType

      };
    case SET_FETCHING_AVATAR:
      return {
        ...state,
        isFetchingAvatar: action.isFetching
      };
    case SET_FETCHING_PROFILE_INFO:
      return {
        ...state,
        isFetchingProfileInfo: action.isFetching
      };
    case SET_PROFILE_INFO_TRANSMITTED:
      return {
        ...state,
        isProfileInfoTransmitted: action.transmitStatus
      };
    default:
      return state;
  }
};
type ProfileActionsType = AddPostActionType
  | SetUserProfileActionType
  | SetUserStatusActionType
  | SetUserAvatarActionType
  | SetFetchingAvatarActionType
  | SetFetchingProfileInfoActionType
  | SetProfileInfoTransmittedActionType;

/*---actions---*/
type AddPostActionType = {type: typeof ADD_POST, text: string};
export const addPost = (text: string): AddPostActionType => ({type: ADD_POST, text});

type SetUserProfileActionType = {type: typeof SET_USER_PROFILE, profileInfo: ProfileInfoType};
export const setUserProfile = (profileInfo: ProfileInfoType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profileInfo
});

type SetUserStatusActionType = {type: typeof SET_USER_STATUS, status: string};
export const setUserStatus = (status: string): SetUserStatusActionType => ({type: SET_USER_STATUS, status});

type SetUserAvatarActionType = {type: typeof SET_USER_AVATAR, photo: PhotosType};
export const setUserAvatar = (photo: PhotosType): SetUserAvatarActionType => ({type: SET_USER_AVATAR, photo});

type SetFetchingAvatarActionType = {type: typeof SET_FETCHING_AVATAR, isFetching: boolean};
export const setFetchingAvatar = (isFetching: boolean): SetFetchingAvatarActionType => ({
  type: SET_FETCHING_AVATAR,
  isFetching
});

type SetFetchingProfileInfoActionType = {type: typeof SET_FETCHING_PROFILE_INFO, isFetching: boolean};
export const setFetchingProfileInfo = (isFetching: boolean): SetFetchingProfileInfoActionType => ({
  type: SET_FETCHING_PROFILE_INFO,
  isFetching
});

type SetProfileInfoTransmittedActionType = {type: typeof SET_PROFILE_INFO_TRANSMITTED, transmitStatus: boolean};
export const setProfileInfoTransmitted = (transmitStatus: boolean): SetProfileInfoTransmittedActionType => ({
  type: SET_PROFILE_INFO_TRANSMITTED,
  transmitStatus
});



/*---thunks---*/
type ProfileThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ProfileActionsType | FormAction>
export const setUserProfileThunk = (userId: number | null): ProfileThunkType => async (dispatch) => {
  dispatch(setFetchingProfileInfo(true));
  const response = await ProfileAPI.setProfile(userId);
  dispatch(setFetchingProfileInfo(false));
  dispatch(setUserProfile(response));
};

export const getUserStatusThunk = (userId: number): ProfileThunkType => async (dispatch) => {
  const response = await ProfileAPI.getStatus(userId);
  dispatch(setUserStatus(response));

};

export const setUserStatusThunk = (status: string): ProfileThunkType => async (dispatch) => {
  const response = await ProfileAPI.setStatus(status);
  if (response.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const setUserAvatarThunk = (file: string): ProfileThunkType => async (dispatch) => {
  dispatch(setFetchingAvatar(true));
  const response = await ProfileAPI.setUserAvatar(file);
  dispatch(setFetchingAvatar(false));
  if (response.resultCode === 0) {
    dispatch(setUserAvatar(response.data.photos))
  }
};

export const saveProfile = (formData: ProfileInfoType): ProfileThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await ProfileAPI.saveProfile(formData);
  if (response.resultCode === 0) {
    await dispatch(setProfileInfoTransmitted(true));
    dispatch(setUserProfileThunk(userId));
  } else {
    let messageError = response.messages.length ?
      response.messages[0]
      : 'something went wrong';

    let action = stopSubmit("profileInfo", {_error: messageError});
    dispatch(action);
    return Promise.reject(messageError)
  }
};

export default profileReducer;