import React from "react";
import s from './Dialogs.module.css'
import DialogName from "./DialogName/DialogName";
import MessageItem from "./MessageItem/MessageItem";
import { addMessageActionCreator, updateBySymbolDialogsActionCreator } from "../../redux/dialogs-reducer";

const Dialogs = ({dispatch, dialogsComp}) => {
  const clickHandler = () => {
    dispatch(addMessageActionCreator())
  };
  const changeHandler = (event) => {
    dispatch(updateBySymbolDialogsActionCreator(event.target.value))
  };
  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItems}>
        {dialogsComp.dialogsNameData.map(el => <DialogName name={el.name}
                                                           id={el.id}
                                                           key={el.id}/>)}
      </div>

      <div className={s.messages}>
        <div>{dialogsComp.dialogsMessagesData.map(el =>
          <MessageItem messageContent={el.message}
                       key={el.id} />)}
        </div>

        <div className={s.addingMesArea}>
          <textarea onChange={changeHandler}
                    value={dialogsComp.newMessageText} />

          <button onClick={clickHandler}>add message</button>
        </div>

      </div>

    </div>
  )
};

export default Dialogs;