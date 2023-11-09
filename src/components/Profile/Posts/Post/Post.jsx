import React from "react";
import styles from "./Post.module.scss";
const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        src={props.img}
        alt=""
      />
      <p>{props.mess}</p>

      <div className={styles.span_item}>
        <span>likes: {props.count}</span>
      </div>
    </div>
  );
};
export default Post;
