import { ProfileAPI } from "../services/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const UPDATE_BY_SYMBOL_STATUS = 'profile/UPDATE_BY_SYMBOL_STATUS';
const SET_USER_AVATAR = 'profile/SET_USER_AVATAR';
const SET_FETCHING_AVATAR = 'profile/SET_FETCHING_AVATAR';
const SET_FETCHING_PROFILE_INFO = 'profile/SET_FETCHING_PROFILE_INFO';
const SET_PROFILE_INFO_TRANSMITTED = 'profile/SET_PROFILE_INFO_TRANSMITTED';

let id = 100;

let initialState = {
  postData: [
    {
      id: 1, message: 'Hi, how are you??Hi, how are you??Hi, how are you??' +
        'Hi, how are you??Hi, how are you??Hi, how are you??', likesCount: 25
    },
    {id: 2, message: 'That\'s my first message', likesCount: 15},
    {id: 3, message: 'Hi, how are you??', likesCount: 39},
  ],
  profileInfo: null,
  status: '',
  isFetchingAvatar: false,
  isFetchingProfileInfo: false,
  isProfileInfoTransmitted: false
};


const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: id++,
        message: action.text,
        likesCount: 0
      };
      return {
        ...state,
        postData: [...state.postData, newPost]
      };
    case UPDATE_BY_SYMBOL_STATUS:
      return {
        ...state,
        status: action.text
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
        profileInfo: {...state.profileInfo, photos: action.photo}
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


export const addPost = (text) => ({type: ADD_POST, text});
export const setUserProfile = (profileInfo) => ({type: SET_USER_PROFILE, profileInfo});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const setUserAvatar = (photo) => ({type: SET_USER_AVATAR, photo});
export const setFetchingAvatar = (isFetching) => ({type: SET_FETCHING_AVATAR, isFetching});
export const setFetchingProfileInfo = (isFetching) => ({type: SET_FETCHING_PROFILE_INFO, isFetching});
export const setProfileInfoTransmitted = (transmitStatus) => ({type: SET_PROFILE_INFO_TRANSMITTED, transmitStatus});

export const setUserProfileThunk = (userId) => async (dispatch) => {
  dispatch(setFetchingProfileInfo(true));
  const response = await ProfileAPI.setProfile(userId);
  dispatch(setFetchingProfileInfo(false));
  dispatch(setUserProfile(response));
};
export const getUserStatusThunk = (userId) => async (dispatch) => {
  const response = await ProfileAPI.getStatus(userId);
  dispatch(setUserStatus(response));

};
export const setUserStatusThunk = (status) => async (dispatch) => {
  const response = await ProfileAPI.setStatus(status);
  if(response.resultCode === 0){
    dispatch(setUserStatus(status));
  }
};
export const setUserAvatarThunk = (file) => async (dispatch) => {
  dispatch(setFetchingAvatar(true));
  const response = await ProfileAPI.setUserAvatar(file);
  dispatch(setFetchingAvatar(false));
  if(response.resultCode === 0){
    dispatch(setUserAvatar(response.data.photos))
  }
};

export const saveProfile = (formData) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await ProfileAPI.saveProfile(formData);
  if(response.resultCode === 0){
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