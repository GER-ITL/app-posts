import React from "react";
import styles from "./../Messages.module.scss";
const Message = ({ message, name  , img}) => {
  return <div className={styles.message}> 
  <div> <img className={styles.imgAva} src={img} alt="" /></div>
 <div className={styles.mess}>{name}: {message}</div>  
  </div>;
};

export default Message;
