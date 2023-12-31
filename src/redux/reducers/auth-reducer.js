import { stopSubmit } from 'redux-form'
import { AuthAPI, securityAPI } from '../../api/api'
const SET_USER_DATA = 'SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
			}
		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	data: { userId, email, login, isAuth },
})
export const getCaptchaUrlSuccess = captchaUrl => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl },
})

export const getAuthUserData = () => {
	return async dispatch => {
		let response = await AuthAPI.me()
		if (response.data.resultCode === 0) {
			let { id, email, login } = response.data.data
			dispatch(setAuthUserData(id, email, login, true))
		}
	}
}

export const login =
	(email, password, rememberMe, captcha) => async dispatch => {
		let response = await AuthAPI.login(email, password, rememberMe, captcha)
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserData())
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaUrl())
			}
			let error =
				response.data.messages.length > 0
					? response.data.messages[0]
					: 'Some error'
			dispatch(stopSubmit('login', { _error: error }))
			// console.log(error)
		}
	}

export const getCaptchaUrl = () => async dispatch => {
	const response = await securityAPI.getCaptchaURL()
	const captchaUrl = response.data.url

	dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => {
	return dispatch => {
		AuthAPI.logout().then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false))
			}
		})
	}
}

export default authReducer
