import { reduxForm } from 'redux-form'
import Textarea, { Input, createField } from '../../common/FormControls'
import s from '../../common/FormControls.module.scss'
import styles from './ProfileInfo.module.scss'
const ProfileDataForm = ({ profile, handleSubmit, error, cancelSubmit }) => {
	return (
		<div className='profile_info'>
			<form onSubmit={handleSubmit}>
				<div className={styles.formEdit}>
					<div className='description'>
						<button>{`SAVE`} </button> {'=>'}
						<button onClick={cancelSubmit}>EXIT</button>
						{error ? <div className={s.formError}>{error}</div> : ''}
						{/* {isOwner && (
						<div>
							<button onClick={goToEditMode}>EditMode</button>
						</div>
					)} */}
						<h2>{createField('Full  name', 'fullName', [], Input)}</h2>
						{/* <ProfileStatusHook status={status} updateStatus={updateStatus} /> */}
						<div>
							<b>About me: </b>
							{createField('About me...', 'aboutMe', [], Textarea)}
						</div>
						<div>
							<b>Looking for a job:</b>
							{createField('', 'lookingForAJob', [], Input, {
								type: 'checkbox',
							})}
						</div>
						<div>
							<b>My skills: </b>
							{createField(
								'my professional skills',
								'lookingForAJobDescription',
								[],
								Textarea
							)}
						</div>
					</div>

					<div>
						<b>
							<b>Contacts:</b>
							<div>Change Status: double click on status</div>
						</b>
						{Object.keys(profile.contacts).map(key => {
							return (
								<div className={styles.contactsEdit} key={key}>
									<b>
										{key}: {createField(key, 'contacts.' + key, [], Input)}
									</b>
								</div>
							)
						})}
					</div>

					{/* <div> {profile.contacts.github}</div>
			<div> {profile.contacts.vk}</div>
			<div> {profile.contacts.instagram}</div>
			<div> {profile.contacts.twitter}</div>
			<div> {profile.contacts.youtube}</div> */}
				</div>
			</form>
		</div>
	)
}

const ProfileDataFormRedux = reduxForm({ form: 'edit-profile' })(
	ProfileDataForm
)

export default ProfileDataFormRedux
