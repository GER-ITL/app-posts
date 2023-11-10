import React from "react";
import styles from "./Posts.module.scss";
import Post from "./Post/Post";
const postsData= [
  {
    img:'https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg',
    mess:'Hello bro',
    count: 10
  },
  {
    img:'https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg',
    mess:'How are you?',
    count: 20
  },
  
]
const Posts = () => {
  return (
    <div>
      <h1> My Posts</h1>
      <div className={styles.addFormBlock}>
        <textarea placeholder="your news..."></textarea>
        <div>
          <button className={styles.sendBtn}>Send</button>
          <button className={styles.removeBtn}>Remove</button>
        </div>
      </div>
      <div className={styles.posts}>
          {postsData.map((post)=>{
            return(
              <Post img = {post.img} mess={post.mess} count={post.count} />

            )
          })}
      </div>
    </div>
  );
};
export default Posts;
