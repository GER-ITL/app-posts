import React from "react";
import styles from "./Messages.module.scss";
import Message from "./Message/Message";
import Dialogs from "./Dialogs/Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/state";

const Messages = ({ store }) => {
  const { messagesPage } = store.getState();

  let newMessageBody = messagesPage.newMessageBody;
  const onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };
  const onNewMassageChange = (e) => {
    let body = e.target.value;
    store.dispatch(updateNewMessageBodyCreator(body));
  };
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
            return <Message name = {mess.name} message={mess.message} key={mess.id} />;
          })}
        </div>
      </div>
      <div className={styles.sendForm}>
        <button onClick={onSendMessageClick}>Send</button>
        <textarea
          value={newMessageBody}
          onChange={onNewMassageChange}
          placeholder="your mess..."
        ></textarea>
      </div>
    </div>
  );
};

export default Messages;
