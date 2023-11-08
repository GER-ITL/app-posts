import React from 'react'
import styles from './Posts.module.scss'
import Post from './Post/Post'
const Posts = () => {
  return (
    <div>
        <h1> My Posts</h1>
        <div className={styles.addFormBlock}>

        <textarea placeholder='your news...'></textarea>
        <div>

        <button className={styles.sendBtn}>Send</button>
        <button className={styles.removeBtn}>Remove</button>
        </div>
        </div>
        <div className={styles.posts}>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
  )
}
export default Posts