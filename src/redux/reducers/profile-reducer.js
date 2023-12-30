import { ProfileAPI, UsersAPI } from '../../api/api'
const ADD_POST = 'ADD-POST'
const REMOVE_POST = 'REMOVE-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
	postsData: [
		{
			id: 1,
			img: 'https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg',
			mess: 'Hello bro',
			count: 10,
		},
		{
			id: 2,
			img: 'https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg',
			mess: 'How are you?',
			count: 20,
		},
	],
	profileData: [],
	profile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let body = action.newMessageBody
			let newPost = {
				id: 6,
				img: 'https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg',
				mess: body,
				count: 0,
			}
			let stateCopy = { ...state }
			stateCopy.postsData = [...state.postsData]
			stateCopy.postsData.push(newPost)
			return stateCopy
		}
		case REMOVE_POST:
			return {
				...state,
				postsData: state.postsData.filter(p => {
					return p.id !== action.postId
				}),
			}
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }
		case SET_STATUS:
			return { ...state, status: action.status }
		default:
			return state
	}
}

export const addPostActionCreator = newMessageBody => {
	return {
		type: ADD_POST,
		newMessageBody,
	}
}

export const removePostActionCreator = postId => {
	return {
		type: REMOVE_POST,
		postId,
	}
}
export const setUserProfile = profile => {
	return {
		type: SET_USER_PROFILE,
		profile,
	}
}
export const setStatus = status => {
	return {
		type: SET_STATUS,
		status,
	}
}
export const profileThunk = userId => {
	return dispatch => {
		UsersAPI.getProfile(userId).then(data => {
			dispatch(setUserProfile(data))
		})
	}
}
export const getStatus = userId => {
	return dispatch => {
		ProfileAPI.getStatus(userId).then(response => {
			dispatch(setStatus(response.data))
		})
	}
}
export const updateStatus = status => {
	return dispatch => {
		ProfileAPI.updateStatus(status).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatus(response.data.status))
			}
		})
	}
}
export default profileReducer
