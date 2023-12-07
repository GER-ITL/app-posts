import { connect } from "react-redux"
import ProfileInfo from "./ProfileInfo"
let mapStateToProps = (state)=>{
  return{
    profileData: state.profilePage.profileData
  }
}

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)
export default ProfileInfoContainer;
