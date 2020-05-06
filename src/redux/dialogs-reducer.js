const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';
let id = 100,
    initialState = {
  dialogsNameData: [
    {id:1, name:'Dmitriy'},
    {id:2, name:'Valeriy'},
    {id:3, name:'Ivan'},
    {id:4, name:'Dasha'},
    {id:5, name:'Maria'},
  ],
  dialogsMessages: [
    {id:1, message:'Hi'},
    {id:2, message:'Howre doing Howre doing Howre doing Howre doing Howre doing Howre doing'},
    {id:3, message:'Mkay'},
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        dialogsMessages: [...state.dialogsMessages,
                          { id: id++,
                            message: action.newMessageText
                          }]
      };

    default:
      return state;
  }

};

export const sendMessage = (text) => ({ type: ADD_MESSAGE, newMessageText: text });

export default dialogsReducer;