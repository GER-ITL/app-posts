import styles from "./Posts.module.scss";
import Post from "./Post/Post";
import React from "react";

const Posts = ({
  postsData,
  newPostText,
  updateNewPostText,
  addPostHandler,
  removePostHandler,
}) => {
  let newPostElement = React.createRef();
  const addPost = () => {
    if (newPostElement.current.value !== "") {
      addPostHandler();
    }
  };
  const removePost = () => {
    removePostHandler();
  };
  let onPostChangeHandler = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };
  return (
    <div>
      <h1> My Posts</h1>
      <div className={styles.addFormBlock}>
        <textarea
          onChange={onPostChangeHandler}
          value={newPostText}
          ref={newPostElement}
          placeholder="your news..."
        ></textarea>
        <div>
          <button onClick={addPost} className={styles.sendBtn}>
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
