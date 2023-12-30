import React from 'react'
import { Provider, connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { compose } from 'redux'
import FriendsContainer from './components/Friends/FriendsContainer'
import LoginPage from './components/Login/Login'
import MessagesContainer from './components/Messages/MessagesContainer'
import MusicContainer from './components/Music/MusicContainer'
import NewsContainer from './components/News/NewsContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import Preloader from './components/common/Preloader'
import HeaderContainer from './components/ui/HeaderContainer'
import Sidebar from './components/ui/Sidebar'
import { initializeApp } from './redux/reducers/app-reducer'
import store from './redux/redux-store'
import './styles/App.scss'

// const MessagesContainer = React.lazy(() => {
// 	import('./components/Messages/MessagesContainer')
// })
// const ProfileContainer = React.lazy(() => {
// 	import('./components/Profile/ProfileContainer')
// })
class App extends React.Component {
	// const { friendsPage, newsPage } = store.getState()
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className='content'>
				<HeaderContainer />
				<Sidebar />
				<div className='content-wrapper'>
					<Routes>
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/profile/:userId?' element={<ProfileContainer />} />
						<Route path='/messages' element={<MessagesContainer />} />
						<Route path='/news' element={<NewsContainer />} />
						<Route path='/music' element={<MusicContainer />} />
						<Route path='/settings' element={<Settings />} />
						<Route path='/friends' element={<FriendsContainer />} />
					</Routes>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	initialized: state.app.initialized,
})

const AppContainer = compose(
	connect(mapStateToProps, {
		initializeApp,
	})
)(App)
const AppMain = () => {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	)
}

export default AppMain
