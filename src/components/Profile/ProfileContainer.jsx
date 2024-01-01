import React from 'react'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { compose } from 'redux'
import { AuthRedirect } from '../../hoc/AuthRedirect'
import {
	getStatus,
	profileThunk,
	savePhoto,
	saveProfile,
	updateStatus,
} from '../../redux/reducers/profile-reducer'
import './../../styles/App.scss'
import Profile from './Profile'
class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId
		if (!userId) {
			userId = this.props.autorizedUserId
			if (!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.profileThunk(userId)
		this.props.getStatus(userId)
	}

	render() {
		return (
			<div className='profileContainer'>
				<Profile
					isOwner={!this.props.router.params.userId}
					{...this.props}
					profile={this.props.profile}
					status={this.props.status}
					updateStatus={this.props.updateStatus}
					savePhoto={this.props.savePhoto}
					saveProfile={this.props.saveProfile}
				/>
			</div>
		)
	}
}

// let AuthRedirectComponent = AuthRedirect(ProfileContainer)

let mapStateToProps = state => ({
	profile: state.profilePage.profile,
	profilePage: state.profilePage,
	status: state.profilePage.status,
	autorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth,
})

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation()
		let navigate = useNavigate()
		let params = useParams()
		return <Component {...props} router={{ location, navigate, params }} />
	}
	return ComponentWithRouterProp
}

export default compose(
	connect(mapStateToProps, {
		profileThunk,
		getStatus,
		updateStatus,
		savePhoto,
		saveProfile,
	}),
	withRouter,
	AuthRedirect
)(ProfileContainer)
