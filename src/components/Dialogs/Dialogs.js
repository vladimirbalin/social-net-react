import React from "react";
import s from './Dialogs.module.css'
import DialogName from "./DialogName/DialogName";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItems}>
        {props.dialogsComp.dialogsNameData.map(el => <DialogName name={el.name} id={el.id} key={el.id-1}/>)}
      </div>

      <div className={s.messages}>
        {props.dialogsComp.dialogsMessagesData.map(el => <MessageItem messageContent={el.message} key={el.id-1} />)}
      </div>

    </div>
  )
};

export default Dialogs;