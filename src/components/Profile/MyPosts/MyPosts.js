import React from 'react';
import './MyPosts.styles.scss';
import Post from './Post/Post';
import MyPostsForm from './MyPostsForm';

const MyPosts = ({ addPost, posts }) => {
  const clickHandler = (formData) => {
    addPost(formData.addPostTextArea);
    formData.addPostTextarea = '';
  };

  return (
    <section className="my-posts">
      <MyPostsForm onSubmit={clickHandler} />
      {posts.map((el) => (
        <Post message={el.message} likes={el.likesCount} key={el.id} />
      ))}
    </section>
  );
};

export default MyPosts;
