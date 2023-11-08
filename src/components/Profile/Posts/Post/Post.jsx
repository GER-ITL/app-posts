import React from 'react'
import styles from './Post.module.scss'
const Post = () => {
  return (
        <div className={styles.item}>
          <img src="https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, id? Porro ducimus fugit obcaecati minima eius consectetur, adipisci error culpa.</p>
          <div className={styles.span_item}><span>like</span></div>
          </div>
  )
}
export default Post;