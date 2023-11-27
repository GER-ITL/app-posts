import React, { useState } from "react";
import styles from "./Post.module.scss";
const Post = ({img, mess, count}) => {
  const [likes, setLikes] = useState(count);
  const changeLikes = () => {
    setLikes(likes + 1);
  };
  return (
    <div className={styles.item}>
      <img src={img} alt="" />
      <p>{mess}</p>

      <div className={styles.span_item}>
        <span onClick={changeLikes}>&#128077;{likes}</span>
      </div>
    </div>
  );
};
export default Post;
