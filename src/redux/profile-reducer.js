import { ProfileAPI } from "../services/api";

const ADD_POST = 'ADD_POST';
const UPDATE_BY_SYMBOL = 'UPDATE_BY_SYMBOL';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_BY_SYMBOL_STATUS = 'UPDATE_BY_SYMBOL_STATUS';
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
  profile: null,
  status: ''
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
    // case UPDATE_BY_SYMBOL:
    //   return {
    //     ...state,
    //     newPostText: action.text
    //   };
    case UPDATE_BY_SYMBOL_STATUS:
      return {
        ...state,
        status: action.text
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};


export const addPost = (text) => ({type: ADD_POST, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
// export const updateBySymbol = (text) => ({type: UPDATE_BY_SYMBOL, text});

export const setUserProfileThunk = (userId) => {
  return (dispatch) => {
    ProfileAPI.setProfile(userId || 6234)
      .then(data => {
        dispatch(setUserProfile(data))
      });
  }
};
export const getUserStatusThunk = (userId) => {
  return (dispatch) => {
    ProfileAPI.getStatus(userId || 6234)
      .then(data => {
        dispatch(setUserStatus(data))
      });
  }
};
export const setUserStatusThunk = (status) => {
  return (dispatch) => {
    ProfileAPI.setStatus(status)
      .then((data) => {
        if(data.resultCode === 0){
          dispatch(setUserStatus(status));
        }
      })
  }
};

export default profileReducer;