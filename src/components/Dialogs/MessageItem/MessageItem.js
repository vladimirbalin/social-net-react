import React from "react";
import './MessageItem.styles.scss';

const MessageItem = (props) => {
  return <div className='dialogs__item'>{props.messageContent}</div>
};

export default MessageItem;