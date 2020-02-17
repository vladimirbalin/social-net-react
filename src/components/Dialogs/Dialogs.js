import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogName = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialogName}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return <div className={s.messageItem}>{props.messageContent}</div>
};



const Dialogs = (props) => {
  let dialogsData = [
    {id:1, name:'Dmitriy'},
    {id:2, name:'Valeriy'},
    {id:3, name:'Ivan'},
    {id:4, name:'Dasha'},
    {id:5, name:'Maria'},
  ];

  let messageData = [
    {id:1, message:'Hi'},
    {id:2, message:'Howre doing'},
    {id:3, message:'Mkay'},
  ];


  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItems}>
        {dialogsData.map(el=><DialogName name={el.name} id={el.id} key={el.id-1}/>)}
      </div>

      <div className={s.messages}>
        {messageData.map(el => <MessageItem messageContent={el.message} key={el.id-1} />)}
      </div>

    </div>
  )
};

export default Dialogs;