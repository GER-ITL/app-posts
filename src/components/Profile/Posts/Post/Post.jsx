import React, { useState } from "react";
import styles from "./Post.module.scss";
const Post = (props) => {
  const [likes, setLikes] = useState(props.count);
  const changeLikes = () => {
    setLikes(likes + 1);
  };
  return (
    <div className={styles.item}>
      <img src={props.img} alt="" />
      <p>{props.mess}</p>

      <div className={styles.span_item}>
        <span onClick={changeLikes}>&#128077;{likes}</span>
      </div>
    </div>
  );
};
export default Post;
