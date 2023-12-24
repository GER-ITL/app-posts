import React from "react";
import styles from "./Messages.module.scss";
import Message from "./Message/Message";
import Dialogs from "./Dialogs/Dialogs";
import { Field, reduxForm } from "redux-form";
import { Navigate } from "react-router-dom";
import Textarea from "../common/FormControls";
import { maxLengthCreator, requiredField} from "../../utils/validators";


const maxLengthCreator50 = maxLengthCreator(50)

const Messages = ({
  messagesPage,
  onSendMessage,
  isAuth

}) => {
  if (!isAuth) return <Navigate to={"/login"} />;

  const addNewMessage = (newMessage) => {
    onSendMessage(newMessage.newMessageBody);
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
      <AddFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddFormMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.sendForm}>
        <button>Send</button>
        <Field
          name="newMessageBody"
          component={Textarea}
          validate={[requiredField, maxLengthCreator50]}
          placeholder="your mess..."
        />
      </div>
    </form>
  );
};
const AddFormRedux = reduxForm({ form: "messageForm" })(AddFormMessageForm);
export default Messages;
