import { UsersAPI } from '../../api/api'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE-IS_FETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE-IS-FOLLOWING-PROGRESS'
const SET_PAGE_SIZE = 'SET-PAGE-SIZE'

let initialState = {
	users: [],
	pageSize: 3,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				}),
			}
		case SET_USERS:
			return {
				...state,
				users: action.users,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}
		case SET_PAGE_SIZE:
			return {
				...state,
				pageSize: action.pageSize,
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.count,
			}
		case TOOGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case TOOGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId),
			}
		default:
			return state
	}
}

export const followSuccess = userId => ({ type: FOLLOW, userId })
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setCurrentPages = currentPage => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})
export const setPagesSize = pageSize => ({
	type: SET_PAGE_SIZE,
	pageSize,
})
export const setTotalUsersCount = totalUsersCount => ({
	type: SET_TOTAL_USERS_COUNT,
	count: totalUsersCount,
})
export const setToogleIsFetching = isFetching => ({
	type: TOOGLE_IS_FETCHING,
	isFetching: isFetching,
})
export const setToogleIsFollowingProgress = (isFetching, userId) => ({
	type: TOOGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId,
})

export const getUsersThunkCreator = (currentPage = 1, pageSize = 3) => {
	return dispatch => {
		dispatch(setToogleIsFetching(true))
		dispatch(setCurrentPages(currentPage))
		UsersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(setCurrentPages(currentPage))
			dispatch(setToogleIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
		})
	}
}
export const follow = id => {
	return dispatch => {
		dispatch(setToogleIsFollowingProgress(true, id))
		UsersAPI.postUsers(id).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(id))
			}
			dispatch(setToogleIsFollowingProgress(false, id))
		})
	}
}

export const unfollow = id => {
	return dispatch => {
		dispatch(setToogleIsFollowingProgress(true, id))
		UsersAPI.deleteUsers(id).then(data => {
			if (data.resultCode === 0) {
				dispatch(unfollowSuccess(id))
			}
			dispatch(setToogleIsFollowingProgress(false, id))
		})
	}
}

export default usersReducer
