import React from 'react';
import Post from "./Post/Post";
import './MyPosts.styles.scss';
import MyPostsForm from "./MyPostsForm";


const MyPosts = ({addPost, postData}) => {

  const clickHandler = (formData) => {
    addPost(formData.addPostTextArea);
    formData.addPostTextarea = '';
  };

  return (
    <section className='my-posts'>

        <MyPostsForm onSubmit={clickHandler}/>
        {postData.map(el => <Post message={el.message}
                                  likes={el.likesCount}
                                  key={el.id}/>)}
      
    </section>
  );
};

export default MyPosts;