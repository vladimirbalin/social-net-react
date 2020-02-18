import React from "react";
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.postItem}>
      <span>{props.message}</span>&nbsp;
      <div className={s.likes}>
        <img src="assets/img/heart.svg" alt="heart"/> <strong>{props.likes}</strong>
      </div>
    </div>

  )
};

export default Post;