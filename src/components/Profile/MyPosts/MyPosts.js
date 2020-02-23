import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import { addPostActionCreator, updateBySymbolActionCreator } from "../../../redux/profile-reducer";


const MyPosts = ({profileComp, dispatch}) => {
  const postData = profileComp.postData;

  const clickHandler = () => {
    dispatch(addPostActionCreator());
  };

  const changeHandler = (event) => {
    dispatch(updateBySymbolActionCreator(event.target.value))
  };

  return (
      <div className={s.myPosts}>
        <h3>My posts</h3>
        <div>
          <div className={s.addPostArea}>
            <textarea onChange={changeHandler}
                      className={s.textarea}
                      value={profileComp.newPostText} />
            <button onClick={clickHandler}>Add post</button>
          </div>
          {postData.map(el => <Post message={el.message}
                                    likes={el.likesCount}
                                    key={el.id} />)}
        </div>
      </div>
  );
};

export default MyPosts;