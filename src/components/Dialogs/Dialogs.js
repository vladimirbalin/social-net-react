import React from "react";
import s from './Dialogs.module.css'
import DialogName from "./DialogName/DialogName";
import MessageItem from "./MessageItem/MessageItem";
import DialogsForm from "./DialogsForm";
import Content from "../common/Content/Content";


const Dialogs = ({sendMessage, updateBySymbolDialogs, state}) => {

  const clickHandler = (formData) => {
    sendMessage(formData.dialogsTextarea);
    formData.dialogsTextarea = '';
  };
  // const changeHandler = (event) => {
  //   updateBySymbolDialogs(event.target.value);
  // };

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

          <DialogsForm onSubmit={clickHandler}/>
        </div>
      </div>

  )
};

export default Dialogs;