import React, { Component } from "react";
import s from './Dialogs.module.css'
import DialogName from "./DialogName/DialogName";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = ({sendMessage, updateBySymbolDialogs, state, isAuth}) => {

  const clickHandler = () => {
    sendMessage();
  };
  const changeHandler = (event) => {
    updateBySymbolDialogs(event.target.value);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {state.dialogsNameData.map(el => <DialogName name={el.name}
                                                     id={el.id}
                                                     key={el.id}/>)}
      </div>

      <div className={s.messages}>

        <div>{state.dialogsMessages.map(el =>
          <MessageItem messageContent={el.message}
                       key={el.id}/>)}
        </div>

        <div className={s.addingMesArea}>
          <textarea onChange={changeHandler}
                    value={state.newMessageText}/>

          <button onClick={clickHandler}>add message</button>
        </div>
      </div>
    </div>)
};

export default Dialogs;