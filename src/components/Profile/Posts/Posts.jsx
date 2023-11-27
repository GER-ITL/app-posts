import styles from "./Posts.module.scss";
import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator, removePostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";


const Posts = ({postsData, newPostText, dispatch}) => {
  let newPostElement = React.createRef();
  const addPostHandler = () => {
    if (newPostElement.current.value !== "") {
      dispatch(addPostActionCreator());
    }
  };
  const removePost = () => {
    dispatch(removePostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text)
    dispatch(action);
  };
  return (
    <div>
      <h1> My Posts</h1>
      <div className={styles.addFormBlock}>
        <textarea
          onChange={onPostChange}
          value={newPostText}
          ref={newPostElement}
          placeholder="your news..."
        ></textarea>
        <div>
          <button onClick={addPostHandler} className={styles.sendBtn}>
            Send
          </button>
          <button onClick={removePost} className={styles.removeBtn}>
            Remove
          </button>
        </div>
      </div>
      <div className={styles.posts}>
        {postsData.map((post) => {
          return (
            <Post
              key={post.id}
              img={post.img}
              mess={post.mess}
              count={post.count}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
