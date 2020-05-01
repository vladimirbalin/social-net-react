import React from 'react';
import './Post.styles.scss';
import logo from '../../../../assets/img/heart.svg';

const Post = (props) => {
  return (

    <div className='my-posts__item'>
      <span>{props.message}</span>&nbsp;
      <div className='my-posts__likes'>
        <img src={logo} alt="heart"/> <strong>{props.likes}</strong>
      </div>
    </div>

  )
};

export default Post;