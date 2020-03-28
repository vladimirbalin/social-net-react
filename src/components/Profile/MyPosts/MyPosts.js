import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import MyPostsForm from "./MyPostsForm";


const MyPosts = ({addPost, postData}) => {

  const clickHandler = (formData) => {
    addPost(formData.addPostTextArea);
    formData.addPostTextarea = '';
  };


  return (
    <div className={s.myPosts}>

      <div>
        <MyPostsForm onSubmit={clickHandler}/>
        {postData.map(el => <Post message={el.message}
                                  likes={el.likesCount}
                                  key={el.id}/>)}
      </div>
    </div>
  );
};

export default MyPosts;