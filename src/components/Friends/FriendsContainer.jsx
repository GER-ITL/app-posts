import { connect } from "react-redux";
import Friends from "./Friends";
import { AuthRedirect } from "../../hoc/AuthRedirect";

let mapStateToProps = (state)=>{
  return{
    friendsPage: state.friendsPage,
  }
}
const AuthRedirectComponent = AuthRedirect(Friends)

const FriendsContainer = connect(mapStateToProps)(AuthRedirectComponent)
export default FriendsContainer;
