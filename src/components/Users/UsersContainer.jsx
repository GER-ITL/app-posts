import { connect } from 'react-redux'
import Users from './Users'
import { followAC, setUsersAC, unfollowAC } from '../../redux/reducers/users-reducer'


let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{
    followHandler: (userId) => {
      dispatch(followAC(userId));
    },
    unfollowHandler: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsersHandler: (users) => {
      dispatch(setUsersAC(users));
    },
  }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer