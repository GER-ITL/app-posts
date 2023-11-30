import React from "react";
import styles from "./../Messages.module.scss";
const Message = ({ message, name }) => {
  return <div className={styles.message}> 
 <div>{name}:</div>
 <div>{message}</div>
  
  </div>;
};

export default Message;
