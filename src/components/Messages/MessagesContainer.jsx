import Messages from "./Messages";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/reducers/messages-reducer";
import { connect } from "react-redux";



let mapStateToProps = (state)=>{
  return{
    messagesPage: state.messagesPage
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{
    onSendMessageClick: () => {
      dispatch(sendMessageCreator());
    },
    onNewMassageChange: (body) => {
     dispatch(updateNewMessageBodyCreator(body));
    },
  }
}

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)

export default MessagesContainer;
