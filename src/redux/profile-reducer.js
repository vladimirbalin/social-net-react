const ADD_POST = 'ADD_POST';
const UPDATE_BY_SYMBOL = 'UPDATE_BY_SYMBOL';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
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
  newPostText: '',
  profile: null
};


const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: id++,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ''
      };
    case UPDATE_BY_SYMBOL:
      return {
        ...state,
        newPostText: action.text
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};


export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateBySymbol = (text) => ({type: UPDATE_BY_SYMBOL, text});


export default profileReducer;