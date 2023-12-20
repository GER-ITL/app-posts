import React from "react";
import styles from "./Messages.module.scss";
import Message from "./Message/Message";
import Dialogs from "./Dialogs/Dialogs";
import {Navigate} from "react-router-dom";
const Messages = ({ messagesPage, onSendMessageClick, onNewMassageChange, isAuth }) => {
  let newMessageBody = messagesPage.newMessageBody;
  const onSendMessage = () => {
    if(newMessageBody !== '')
    onSendMessageClick();
  };
  const onNewMassage = (e) => {
    let body = e.target.value;
    onNewMassageChange(body);
  };
  if (!isAuth) return <Navigate to={'/login'}/> 
  return (
    <div>
      <h1>Messages</h1>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          {messagesPage.dialogsData.map((dialog) => {
            return (
              <Dialogs name={dialog.name} key={dialog.id} id={dialog.id} />
            );
          })}
        </div>
        <div className={styles.messages}>
          {messagesPage.messagesData.map((mess) => {
            return (
              <Message
                name={mess.name}
                img={mess.img}
                message={mess.message}
                key={mess.id}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.sendForm}>
        <button onClick={onSendMessage}>Send</button>
        <textarea
          value={newMessageBody}
          onChange={onNewMassage}
          placeholder="your mess..."
        ></textarea>
      </div>
    </div>
  );
};

export default Messages;
