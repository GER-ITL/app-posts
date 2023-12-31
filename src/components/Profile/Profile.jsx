import React from 'react'
import './../../styles/App.scss'
import PostsContainer from './Posts/PostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props => {
	return (
		<div className='profile'>
			{/* <img
        src="https://www.pixground.com/wp-content/uploads/2023/04/Clouds-Meet-The-Sea-AI-Generated-4K-Wallpaper-jpg.webp"
        alt=""
      /> */}
			<ProfileInfo
				isOwner={props.isOwner}
				profilePage={props.profilePage}
				profile={props.profile}
				status={props.status}
				savePhoto={props.savePhoto}
				updateStatus={props.updateStatus}
			/>
			<PostsContainer />
		</div>
	)
}

export default Profile
