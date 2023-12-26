import React from 'react'
import { connect } from 'react-redux'
import {
	follow,
	getUsersThunkCreator,
	setCurrentPages,
	setPagesSize,
	setToogleIsFollowingProgress,
	unfollow,
} from '../../redux/reducers/users-reducer'
import Preloader from '../common/Preloader'
import Users from './Users'

class UsersClassAPI extends React.Component {
	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
		// this.props.setToogleIsFetching(true);

		// UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
		//   this.props.setToogleIsFetching(false);
		//   this.props.setUsers(data.items);
		//   this.props.setTotalUsersCount(data.totalCount);
		// });
	}

	onPageChanged = pageNumber => {
		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

		// this.props.setCurrentPages(pageNumber);
		// this.props.setToogleIsFetching(true);

		// UsersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
		//   this.props.setUsers(data.items);
		//   this.props.setToogleIsFetching(false);
		// });
	}

	render() {
		return (
			<>
				<h1>USERS WILL BE HERE</h1>
				{this.props.isFetching ? (
					<Preloader />
				) : (
					<Users
						usersPage={this.props.usersPage}
						followHandler={this.props.follow}
						unfollowHandler={this.props.unfollow}
						currentPage={this.props.currentPage}
						totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						onPageChanged={this.onPageChanged}
						followingInProgress={this.props.followingInProgress}
						setPagesSize={this.props.setPagesSize}
						status={this.props.status}
					/>
				)}
			</>
		)
	}
}

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		usersPage: state.usersPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
		status: state.profilePage.status,
	}
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//     followHandler: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollowHandler: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsersHandler: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPagesAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     setToogleIsFetching: (isFetching) => {
//       dispatch(setToogleIsFetchingAC(isFetching));
//     },
//   };
// };
const UsersContainer = connect(mapStateToProps, {
	follow,
	unfollow,
	setCurrentPages,
	setToogleIsFollowingProgress,
	setPagesSize,
	getUsersThunkCreator,
})(UsersClassAPI)

export default UsersContainer
