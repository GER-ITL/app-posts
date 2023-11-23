import React from "react";
import styles from "./Messages.module.scss";
import Message from "./Message/Message";
import Dialogs from "./Dialogs/Dialogs";

const Messages = ({ state }) => {
  const { dialogsData, messagesData } = state;

  return (
    <div>
      <h1>Messages</h1>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          {dialogsData.map((dialog) => {
            return (
              <Dialogs name={dialog.name} key={dialog.id} id={dialog.id} />
            );
          })}
        </div>
        <div className={styles.messages}>
          {messagesData.map((mess) => {
            return <Message message={mess.message} key={mess.id} />;
          })}
        </div>
      </div>
      <div className={styles.sendForm}>
        <button>Send</button>
        <textarea placeholder="your mess..."></textarea>
      </div>
    </div>
  );
};

export default Messages;
