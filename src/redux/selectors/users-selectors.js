import { createSelector } from 'reselect'

export const getUsers = state => {
	return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsers, users => {
	return users.filter(u => true)
})

export const getPageSize = state => {
	return state.usersPage.pageSize
}
export const getTotalUsersCount = state => {
	return state.usersPage.totalUsersCount
}
export const getCurrentPage = state => {
	return state.usersPage.currentPage
}
export const getUsersPage = state => {
	return state.usersPage
}
export const getIsFetching = state => {
	return state.usersPage.isFetching
}
export const getFollowingInProgress = state => {
	return state.usersPage.followingInProgress
}
export const getStatus = state => {
	return state.usersPage.status
}
export const getIsAuth = state => {
	return state.auth.isAuth
}
