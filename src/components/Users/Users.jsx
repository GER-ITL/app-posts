import React from 'react'
import Paginator from '../ui/Paginator'
import User from './User'
import styles from './Users.module.scss'
const Users = ({
	usersPage,
	followHandler,
	unfollowHandler,
	currentPage,
	totalItemsCount,
	pageSize,
	onPageChanged,
	setToogleIsFollowingProgress,
	followingInProgress,
	setPagesSize,
	status,
	isAuth,
}) => {
	const { users } = usersPage

	return (
		<div className={styles.usersPage}>
			{/* <button className={styles.showmoreBtn} onClick={this.getUsers}>Fetch users</button> */}
			<div className={styles.usersBlock}>
				{users.map(user => {
					return (
						<User
							key={user.id}
							user={user}
							followHandler={followHandler}
							unfollowHandler={unfollowHandler}
							setToogleIsFollowingProgress={setToogleIsFollowingProgress}
							followingInProgress={followingInProgress}
							status={status}
							isAuth={isAuth}
						/>
					)
				})}
			</div>
			<Paginator
				currentPage={currentPage}
				totalItemsCount={totalItemsCount}
				pageSize={pageSize}
				onPageChanged={onPageChanged}
			/>
			<div className={styles.showmoreBtnBlock}>
				{users.length !== 0 ? (
					<button
						onClick={() => {
							setPagesSize(5)
						}}
						className={styles.showmoreBtn}
					>
						setPageSize(5)
					</button>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default Users
