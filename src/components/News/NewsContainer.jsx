import { connect } from 'react-redux'
import News from './News'

let mapStateToProps = (state) => {
  return{
    newsPage: state.newsPage
  }
}

const NewsContainer = connect(mapStateToProps)(News)
export default NewsContainer