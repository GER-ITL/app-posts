import styles from "./Posts.module.scss";
import Post from "./Post/Post";
import React from "react";

const Posts = (props) => {
  let newPostElement = React.createRef()
  const addPostHandler = () => {
    if (newPostElement.current.value !== '' ){
      let text = newPostElement.current.value
      newPostElement.current.value = ''
      props.addPost(text)
    }

    }
    const removePost = ()=>{
      props.removePost ()   
    }
  return (
    <div>
      <h1> My Posts</h1>
      <div className={styles.addFormBlock}>  
        <textarea ref={newPostElement} placeholder="your news..."></textarea>
        <div>
          <button onClick={addPostHandler} className={styles.sendBtn}>
            Send
          </button>
          <button onClick={removePost} className={styles.removeBtn}>Remove</button>
        </div>
      </div>
      <div className={styles.posts}>
        {props.postsData.map((post) => {
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
