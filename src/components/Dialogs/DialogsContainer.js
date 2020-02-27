import React from "react";
import { addMessageActionCreator, updateBySymbolDialogsActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    state: state.dialogsComp
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateBySymbolDialogs: (text) => {dispatch(updateBySymbolDialogsActionCreator(text))},
    sendMessage: () => {dispatch(addMessageActionCreator())}
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;