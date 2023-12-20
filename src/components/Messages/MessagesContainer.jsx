import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/reducers/messages-reducer";
import { connect } from "react-redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import Messages from "./Messages";


let mapStateToProps = (state)=>{
  return{
    messagesPage: state.messagesPage,
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
const AuthRedirectComponent = AuthRedirect(Messages)

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

export default MessagesContainer;
