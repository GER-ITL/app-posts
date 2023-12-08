import { combineReducers, createStore } from "redux"
import profileReducer from "./reducers/profile-reducer"
import messagesReducer from "./reducers/messages-reducer"
import sidebarReducer from "./reducers/sideber-reducer"
import friendsReducer from "./reducers/friends-reducer"
import newsReducer from "./reducers/news-reducer"
import musicReducer from "./reducers/music-reducer"
import usersReducer from "./reducers/users-reducer"


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage:messagesReducer,
    friendsPage:friendsReducer,
    usersPage:usersReducer,
    newsPage:newsReducer,
    musicPage: musicReducer,
    sidebar: sidebarReducer,
})

let store = createStore(reducers)

window.store = store

export default store