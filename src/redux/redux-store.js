import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { thunk as thunkMiddleware } from 'redux-thunk'
import appReducer from './reducers/app-reducer'
import authReducer from './reducers/auth-reducer'
import friendsReducer from './reducers/friends-reducer'
import messagesReducer from './reducers/messages-reducer'
import musicReducer from './reducers/music-reducer'
import newsReducer from './reducers/news-reducer'
import profileReducer from './reducers/profile-reducer'
import sidebarReducer from './reducers/sidebar-reducer'
import usersReducer from './reducers/users-reducer'
let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	friendsPage: friendsReducer,
	usersPage: usersReducer,
	newsPage: newsReducer,
	musicPage: musicReducer,
	sidebar: sidebarReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
)

window.store = store

export default store
