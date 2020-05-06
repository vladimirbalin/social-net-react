import React from 'react';
import './Post.styles.scss';
import logo from '../../../../assets/img/heart.svg';

const Post = ({ message, likes}) => {
  return (
    <div className='my-posts__item'>
      <span>{message}</span>&nbsp;
      <div className='my-posts__likes'>
        <img src={logo} alt="heart"/> <strong>{likes}</strong>
      </div>
    </div>
  )
};

export default Post;