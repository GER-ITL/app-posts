import React from 'react'
import photo from '../../../assets/img/user.jpg'
import Preloader from '../../common/Preloader'
import './../../../styles/App.scss'
import ProfileStatusHook from './ProfileStatusHook'
const ProfileInfo = ({ profile, status, updateStatus }) => {
	if (!profile) {
		return <Preloader />
	}
	return (
		<div className='profile_info'>
			<div>
				{profile.photos.large !== null ? (
					<img src={profile.photos.large} alt='ava' />
				) : (
					<img src={photo} alt='ava' />
				)}
			</div>
			<div className='description'>
				<h2>{profile.fullName}</h2>
				<ProfileStatusHook status={status} updateStatus={updateStatus} />
				<div>About me: {profile.aboutMe}</div>
				<div>Job Status: {profile.lookingForAJobDescription}</div>
				<div>Contacts: </div>
				<div> {profile.contacts.github}</div>
				<div> {profile.contacts.vk}</div>
				<div> {profile.contacts.instagram}</div>
				<div> {profile.contacts.twitter}</div>
				<div> {profile.contacts.youtube}</div>
			</div>
		</div>
	)
}

export default ProfileInfo
