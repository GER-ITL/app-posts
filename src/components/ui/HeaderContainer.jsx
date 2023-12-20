import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authThunk, setAuthUserData } from "../../redux/reducers/auth-reducer";
class HeaderContainer extends React.Component {
  componentDidMount(){
    this.props.authThunk()
  }
  render() {
    return (
      <Header {...this.props}/>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
  }
}
export default connect(mapStateToProps,{setAuthUserData, authThunk})(HeaderContainer) ;
