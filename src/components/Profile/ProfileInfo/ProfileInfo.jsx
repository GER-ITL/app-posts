import React from 'react'
import photo from '../../../assets/img/user.jpg'
import Preloader from '../../common/Preloader'
import './../../../styles/App.scss'
import style from './ProfileInfo.module.scss'
import ProfileStatusHook from './ProfileStatusHook'
const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />
	}
	const onMainPhotoSelected = e => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}
	// const [show, setShow] = useState(false)
	return (
		<div className='profile_info'>
			<div className={style.avaProfile}>
				{profile.photos.large !== null ? (
					<img src={profile.photos.large} alt='ava' />
				) : (
					<img src={photo} alt='ava' />
				)}
				{isOwner && (
					<div className={style.file_upload}>
						<div>Change photo</div>
						{/* <button>Выбрать</button> */}
						<input type='file' onChange={onMainPhotoSelected} />
					</div>
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
