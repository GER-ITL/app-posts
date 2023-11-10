import React from "react";
import styles from "./Messages.module.scss";
import Message from "./Message/Message";
import Dialogs from "./Dialogs/Dialogs";
const dialogsData = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Jame",
  },
  {
    id: 3,
    name: "Vinsent",
  },
  {
    id: 4,
    name: "Jack",
  },
  {
    id: 5,
    name: "Johnny",
  },
];
const messagesData = [
  {
    id: 1,
    message: "mess 1",
  },
  {
    id: 2,
    message: "mess 2",
  },
  {
    id: 3,
    message: "mess 3",
  },
  {
    id: 4,
    message: "mess 4",
  },
  {
    id: 5,
    message: "mess 5",
  },
];
const Messages = () => {
  return (
    <div>
      <h1>Messages</h1>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          {dialogsData.map((dialog) => {
            return <Dialogs name={dialog.name} id={dialog.id} />;
          })}
        </div>
        <div className={styles.messages}>
          {messagesData.map((mess) => {
            return <Message message={mess.message} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Messages;
