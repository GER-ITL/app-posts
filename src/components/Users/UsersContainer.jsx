import { connect } from 'react-redux'
import Users from './Users'


let mapPropsToState = (state) => {
  return {
    usersPage: state.usersPage
  }
}

const UsersContainer = connect(mapPropsToState)(Users)

export default UsersContainer