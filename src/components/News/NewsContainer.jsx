import { connect } from 'react-redux'
import News from './News'
import { AuthRedirect } from '../../hoc/AuthRedirect'
let mapStateToProps = (state) => {
  return{
    newsPage: state.newsPage,

  }
}
const AuthRedirectComponent = AuthRedirect(News)

const NewsContainer = connect(mapStateToProps)(AuthRedirectComponent)
export default NewsContainer