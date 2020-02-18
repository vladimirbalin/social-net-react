import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = (props) => {
  const postData = props.postData;
  return (
      <div className={s.myPosts}>
        <h3>My posts</h3>
        <div>
          {postData.map(el => <Post message={el.message} likes={el.likesCount} key={el.id-1}/>)}
        </div>
      </div>
  );
};

export default MyPosts;