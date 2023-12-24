import { applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from "./reducers/profile-reducer"
import messagesReducer from "./reducers/messages-reducer"
import sidebarReducer from "./reducers/sideber-reducer"
import friendsReducer from "./reducers/friends-reducer"
import newsReducer from "./reducers/news-reducer"
import musicReducer from "./reducers/music-reducer"
import usersReducer from "./reducers/users-reducer"
import authReducer from "./reducers/auth-reducer"
import { thunk as thunkMiddleware } from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage:messagesReducer,
    friendsPage:friendsReducer,
    usersPage:usersReducer,
    newsPage:newsReducer,
    musicPage: musicReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store