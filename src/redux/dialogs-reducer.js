const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_BY_SYMBOL_DIALOGS = 'UPDATE-BY-SYMBOL-DIALOGS';
let id = 100;
let initialState = {
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
    // case UPDATE_BY_SYMBOL_DIALOGS:
    //   return {
    //     ...state,
    //     newMessageText: action.newMessageText
    //   };

    default:
      return state;
  }

};

export const sendMessage = (text) => ({ type: ADD_MESSAGE, newMessageText: text });
// export const sendMessage = () => ({ type: ADD_MESSAGE });
// export const updateBySymbolDialogs = (text) => (
//   {
//     type: UPDATE_BY_SYMBOL_DIALOGS,
//     newMessageText: text
//   }
// );

export default dialogsReducer;