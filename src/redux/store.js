import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
const ADD_POST = 'ADD-POST';
const UPDATE_BY_SYMBOL = 'UPDATE-BY-SYMBOL';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_BY_SYMBOL_DIALOGS = 'UPDATE-BY-SYMBOL-DIALOGS';
let id = 100;
let store = {
  _callSubscriber() {
    console.log('hello');
  },
  _state: {
    profileComp: {
      postData: [
        {id: 1, message: 'Hi, how are you??Hi, how are you??Hi, how are you??Hi, how are you??Hi, how are you??Hi, how are you??', likesCount: 25},
        {id: 2, message: 'That\'s my first message', likesCount: 15},
        {id: 3, message: 'Hi, how are you??', likesCount: 39},
      ],
      newPostText: ''
    },
    dialogsComp: {
      dialogsNameData: [
        {id:1, name:'Dmitriy'},
        {id:2, name:'Valeriy'},
        {id:3, name:'Ivan'},
        {id:4, name:'Dasha'},
        {id:5, name:'Maria'},
      ],
        dialogsMessagesData: [
        {id:1, message:'Hi'},
        {id:2, message:'Howre doing Howre doing Howre doing Howre doing Howre doing Howre doing'},
        {id:3, message:'Mkay'},
      ],
      newMessageText: ''
    }
  },
  getState(){
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },
  dispatch(action){

    this._state.profileComp = profileReducer(this._state.profileComp, action);
    this._state.dialogsComp = dialogsReducer(this._state.dialogsComp, action);
    this._callSubscriber(this._state);

  }
};

