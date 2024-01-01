import React, { useState } from 'react'
import photo from '../../../assets/img/user.jpg'
import Preloader from '../../common/Preloader'
import './../../../styles/App.scss'
import ProfileDataForm from './ProfileDataForm'
import style from './ProfileInfo.module.scss'
import ProfileStatusHook from './ProfileStatusHook'
const ProfileInfo = ({
	profile,
	status,
	updateStatus,
	isOwner,
	savePhoto,
	saveProfile,
}) => {
	const [editMode, setEditMode] = useState(false)

	if (!profile) {
		return <Preloader />
	}
	const onMainPhotoSelected = e => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}

	const onSubmit = formData => {
		saveProfile(formData)
	}
	const cancelSubmit = () => {
		setEditMode(false)
	}
	return (
		<>
			{editMode ? (
				<ProfileDataForm
					profile={profile}
					initialValues={profile}
					status={status}
					updateStatus={updateStatus}
					isOwner={isOwner}
					onSubmit={onSubmit}
					onMainPhotoSelected={onMainPhotoSelected}
					goToProfile={() => {
						setEditMode(false)
					}}
					cancelSubmit={cancelSubmit}
				/>
			) : (
				<ProfileData
					profile={profile}
					status={status}
					updateStatus={updateStatus}
					isOwner={isOwner}
					onMainPhotoSelected={onMainPhotoSelected}
					goToEditMode={() => {
						setEditMode(true)
					}}
				/>
			)}
		</>
	)
}

const ProfileData = ({
	profile,
	status,
	updateStatus,
	isOwner,
	onMainPhotoSelected,
	goToEditMode,
}) => {
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
				{isOwner && (
					<div className={style.editBlock}>
						<button className={style.editMode} onClick={goToEditMode}>
							EditMode
						</button>
					</div>
				)}
			</div>
			<div className='description'>
				<h2>{profile.fullName}</h2>
				<ProfileStatusHook status={status} updateStatus={updateStatus} />
				<div>
					<b>About me: </b>
					{profile.aboutMe}
				</div>
				<div>
					<b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
				</div>
				{profile.lookingForAJob ? (
					<div>
						{' '}
						<b>My skills: </b>
						{profile.lookingForAJobDescription}
					</div>
				) : (
					''
				)}
				<div>
					<b>
						<b>Contacts:</b>
					</b>
					{Object.keys(profile.contacts).map(key => {
						return (
							<Contact key={key} title={key} value={profile.contacts[key]} />
						)
					})}
				</div>

				{/* <div> {profile.contacts.github}</div>
			<div> {profile.contacts.vk}</div>
			<div> {profile.contacts.instagram}</div>
			<div> {profile.contacts.twitter}</div>
			<div> {profile.contacts.youtube}</div> */}
			</div>
		</div>
	)
}

export const Contact = ({ title, value }) => {
	return (
		<div className={style.contacts}>
			{title}: {value}
		</div>
	)
}
export default ProfileInfo
