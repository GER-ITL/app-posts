import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/img/user.jpg'
import styles from './Users.module.scss'
const User = ({
	user,
	followHandler,
	unfollowHandler,
	followingInProgress,
	isAuth,
}) => {
	return (
		<div className={styles.userPageItem}>
			<div className={styles.userProfile}>
				<NavLink to={'/profile/' + user.id}>
					<img
						className={styles.img}
						src={user.photos.small !== null ? user.photos.small : userPhoto}
						alt=''
					/>
				</NavLink>
				{isAuth ? (
					user.followed ? (
						<button
							disabled={followingInProgress.some(id => id === user.id)}
							onClick={() => {
								unfollowHandler(user.id)
							}}
							className={styles.btnUnfollow}
						>
							Unfollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some(id => id === user.id)}
							onClick={() => {
								followHandler(user.id)
							}}
							className={styles.btnFollow}
						>
							Follow
						</button>
					)
				) : (
					''
				)}
			</div>
			<div className={styles.user}>
				<div className={styles.userInfo}>
					<div>{user.name}</div>
					<div>{user.status !== null ? user.status : `I'm new user`}</div>
				</div>
				<div className={styles.userInfo2}>
					<div className={styles.country}>{'user.location.country'},</div>
					<div>{'user.location.citi'}</div>
				</div>
			</div>
		</div>
	)
}

export default User
