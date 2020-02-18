import s from "../Dialogs.module.css";
import React from "react";

const MessageItem = (props) => {
  return <div className={s.messageItem}>{props.messageContent}</div>
};

export default MessageItem;