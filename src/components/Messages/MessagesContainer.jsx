import {
  sendMessageCreator,
} from "../../redux/reducers/messages-reducer";
import { connect } from "react-redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import Messages from "./Messages";
import { compose } from "redux";


let mapStateToProps = (state)=>{
  return{
    messagesPage: state.messagesPage,
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{
    onSendMessage: (newMessage) => {
      dispatch(sendMessageCreator(newMessage));
    }
  }
}

// const AuthRedirectComponent = AuthRedirect(Messages)

// const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  AuthRedirect
)(Messages)