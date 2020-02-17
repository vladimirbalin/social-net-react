import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {

  let postData = [
    {id:1, message: 'Hi, how are you??', likesCount: 25},
    {id:1, message: 'That\'s my first message', likesCount: 15},
    {id:1, message: 'Hi, how are you??', likesCount: 39}
  ];

  return (
      <div className={s.myPosts}>
        <h3>My posts</h3>
        <div>
          <Post message={postData[0].message} likes={postData[0].likesCount}/>
          <Post message={postData[1].message} likes={postData[1].likesCount}/>

        </div>
      </div>
  );
};

export default MyPosts;