import React, { useState } from 'react'
import ItemMusic from './ItemMusic/ItemMusic'

const Music = ({ musicPage, onSearchClick, onUpdateSearch }) => {
	let newIteMusicBody = musicPage.newIteMusicBody

	const onUpdate = e => {
		let body = e.target.value
		onUpdateSearch(body)
	}
	const [show, setShow] = useState(false)
	const [label, setLabel] = useState('')
	return (
		<div className='music'>
			<h1>Music</h1>
			{show && (
				<input
					onChange={e => {
						setLabel(e.target.value)
					}}
					type='text'
				/>
			)}
			{show && <div>Label : {label}</div>}
			{show &&
				musicPage.musicData.map(musicItem => {
					return (
						<ItemMusic
							key={musicItem.id}
							label={musicItem.label}
							time={musicItem.time}
						/>
					)
				})}
			{show && (
				<button
					onClick={() => {
						onSearchClick()
					}}
				>
					Search
				</button>
			)}
			<button
				onClick={() => {
					setShow(!show)
				}}
			>
				setShow
			</button>
			{show && (
				<input
					value={newIteMusicBody}
					onChange={onUpdate}
					placeholder='enter label..'
				></input>
			)}
		</div>
	)
}

export default Music
