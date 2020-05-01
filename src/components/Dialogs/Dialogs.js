import React from "react";
import './Dialogs.styles.scss'
import DialogName from "./DialogName/DialogName";
import MessageItem from "./MessageItem/MessageItem";
import DialogsForm from "./DialogsForm";

const Dialogs = ({ sendMessage, state }) => {

  const clickHandler = (formData) => {
    sendMessage(formData.dialogsTextarea);
  };

  return (
      <div className='dialogs'>
        <div className='dialogs__names'>
          {state.dialogsNameData.map(el => <DialogName name={el.name}
                                                       id={el.id}
                                                       key={el.id}/>)}
        </div>

        <div className='dialogs__messages'>
          <div className='dialogs__items'>
            {state.dialogsMessages.map(el =>
              <MessageItem messageContent={el.message}
                          key={el.id}/>)}   
          </div>       

          <DialogsForm onSubmit={clickHandler}/>
        </div>
      </div>
  )
};

export default Dialogs;