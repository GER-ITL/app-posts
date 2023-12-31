import { connect } from 'react-redux'
import {
	addPostActionCreator,
	removePostActionCreator,
} from '../../../redux/reducers/profile-reducer'
import Posts from './Posts'

let mapStateToProps = state => {
	return {
		postsData: state.profilePage.postsData,
		newPostElement: state.profilePage.newPostElement,
		newPostText: state.profilePage.newPostText,
	}
}
let mapDispatchToProps = dispatch => {
	return {
		addPostHandler: newMessageBody => {
			dispatch(addPostActionCreator(newMessageBody))
		},
		removePostHandler: () => {
			dispatch(removePostActionCreator())
		},
	}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
