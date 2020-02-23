import React from 'react';
import s from './Post.module.css';
import logo from '../../../../assets/img/heart.svg';

const Post = (props) => {
  return (

    <div className={s.postItem}>
      <span>{props.message}</span>&nbsp;
      <div className={s.likes}>
        <img src={logo} alt="heart"/> <strong>{props.likes}</strong>
      </div>
    </div>

  )
};

export default Post;