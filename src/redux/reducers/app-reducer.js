import { getAuthUserData, setAuthUserData } from './auth-reducer'
const SET_INITIALIZED = 'SET-INITIALIZED'

let initialState = {
	initialized: null,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true,
			}
		default:
			return state
	}
}

export const initializedSuccess = () => ({
	type: SET_INITIALIZED,
})

export const initializeApp = () => dispatch => {
	let propmise = dispatch(getAuthUserData())
	let propmiseNext = dispatch(setAuthUserData())
	Promise.all([propmise, propmiseNext]).then(() => {
		dispatch(initializedSuccess())
	})
}

export default appReducer
