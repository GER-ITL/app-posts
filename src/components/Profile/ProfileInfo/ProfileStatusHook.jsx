import React, { useEffect, useState } from 'react'

const ProfileStatusHook = props => {
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])
	const activeEM = () => {
		setEditMode(true)
	}
	const deActiveEM = () => {
		setEditMode(false)
		props.updateStatus(status)
	}
	const onStatusChange = e => {
		setStatus(e.target.value)
	}
	return (
		<>
			{!editMode ? (
				<div>
					<span value={status} onDoubleClick={activeEM}>
						<b>Status:</b> {status}
					</span>
				</div>
			) : (
				<div>
					<input
						onChange={onStatusChange}
						onBlur={deActiveEM}
						autoFocus={true}
						value={status}
						type='text'
					/>
				</div>
			)}
		</>
	)
}

export default ProfileStatusHook
