import React from "react";
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.postItem}>
      <span>{props.message}</span>&nbsp;
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Heart_coraz%C3%B3n.svg" alt=""/> <strong>{props.likes}</strong>
    </div>

  )
};

export default Post;