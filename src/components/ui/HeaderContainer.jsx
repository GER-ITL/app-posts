import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData, setAuthUserData, logout  } from "../../redux/reducers/auth-reducer";
class HeaderContainer extends React.Component {
  componentDidMount(){
    this.props.getAuthUserData()
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
    email: state.auth.email,
  }
}
export default connect(mapStateToProps,{setAuthUserData, getAuthUserData, logout })(HeaderContainer) ;
