import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/reducers/users-reducer'
import UsersClass from './UsersClass'


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

export default UsersContainer