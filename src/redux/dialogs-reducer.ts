const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

let id = 100;

type DialogsNames = { id: number, name: string };
type DialogsMessages = { id: number, message: string };

let initialState = {
  dialogsNames: [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Valeriy'},
    {id: 3, name: 'Ivan'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Maria'},
  ] as Array<DialogsNames>,
  dialogsMessages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Howre doing Howre doing Howre doing Howre doing Howre doing Howre doing'},
    {id: 3, message: 'Mkay'},
  ] as Array<DialogsMessages>
};
export type InitialStateType = typeof initialState;

const dialogsReducer = (state: InitialStateType = initialState,
                        action: AddMessageActionType): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        dialogsMessages: [...state.dialogsMessages,
          {
            id: id++,
            message: action.payload
          }
        ]
      };

    default:
      return state;
  }
};

type AddMessageActionType = {
  type: typeof ADD_MESSAGE
  payload: string
}
export const sendMessage = (text: string): AddMessageActionType => ({type: ADD_MESSAGE, payload: text});

export default dialogsReducer;