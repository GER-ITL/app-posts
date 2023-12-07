import React from "react";
import Messages from "./Messages";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/reducers/messages-reducer";

const MessagesContainer = ({ store }) => {
  let state = store.getState();

  const onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };
  const onNewMassageChange = (body) => {
    store.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <Messages
      messagesPage={state.messagesPage}
      onSendMessageClick={onSendMessageClick}
      onNewMassageChange={onNewMassageChange}
    />
  );
};

export default MessagesContainer;
