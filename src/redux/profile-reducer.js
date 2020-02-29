const ADD_POST = 'ADD-POST';
const UPDATE_BY_SYMBOL = 'UPDATE-BY-SYMBOL';
let id = 100;

let initialState = {
  postData: [
    {id: 1, message: 'Hi, how are you??Hi, how are you??Hi, how are you??' +
        'Hi, how are you??Hi, how are you??Hi, how are you??', likesCount: 25},
    {id: 2, message: 'That\'s my first message', likesCount: 15},
    {id: 3, message: 'Hi, how are you??', likesCount: 39},
  ],
    newPostText: ''
};


const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: id++,
        message: state.newPostText,
        likesCount: 0
      };
      return {postData: [...state.postData, newPost],
              newPostText: ''};
    case UPDATE_BY_SYMBOL:
      return {...state,
              newPostText: action.newText};
    default:
      return state;
  }
};


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateBySymbolActionCreator = (text) => (
  {
    type: UPDATE_BY_SYMBOL,
    newText: text
  }
);

export default profileReducer;