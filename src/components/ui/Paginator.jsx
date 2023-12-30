import React, { useState } from 'react'
import styles from '../Users/Users.module.scss'

const Paginator = ({
	currentPage,
	totalItemsCount,
	pageSize,
	onPageChanged,
	portionSize = 10,
}) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(
		Math.ceil(currentPage / portionSize)
	)
	let leftPortionNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionNumber = portionNumber * portionSize

	return (
		<div className={styles.spanPage}>
			{portionNumber > 1 && (
				<button
					className={styles.upDownBtn}
					onClick={() => {
						setPortionNumber(portionNumber - 1)
					}}
				>
					PREV
				</button>
			)}
			{pages
				.filter(page => page >= leftPortionNumber && page <= rightPortionNumber)
				.map(page => {
					return (
						<span
							key={page}
							onClick={e => {
								onPageChanged(page)
							}}
							className={
								currentPage === page
									? styles.selectedPage
									: styles.unSelectedPage
							}
						>
							{page}
						</span>
					)
				})}
			{portionCount > portionNumber && (
				<button
					className={styles.upDownBtn}
					onClick={() => {
						setPortionNumber(portionNumber + 1)
					}}
				>
					NEXT
				</button>
			)}
		</div>
	)
}

export default Paginator
