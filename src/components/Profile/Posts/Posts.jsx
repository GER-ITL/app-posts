import React, { useState } from "react";
import styles from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = (props) => {

  const [posts, setPosts] = useState(props.postsData)
  const addPostHandler= ()=>{
    setPosts(posts)
  }
  return (
    <div>
      <h1> My Posts</h1>
      <div className={styles.addFormBlock}>
        <textarea placeholder="your news..."></textarea>
        <div>
          <button onClick={addPostHandler} className={styles.sendBtn}>Send</button>
          <button className={styles.removeBtn}>Remove</button>
        </div>
      </div>
      <div className={styles.posts}>
          {props.postsData.map((post)=>{
            return(
              <Post key={post.id} img = {post.img} mess={post.mess} count={post.count} />

            )
          })}
      </div>
    </div>
  );
};
export default Posts;
