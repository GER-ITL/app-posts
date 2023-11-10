import React from 'react'
import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>

      <img src="https://cdn-icons-png.flaticon.com/512/1390/1390385.png" alt="" />
      </div>
      <div className={styles.label}>

      <h1>www.social_network</h1>
      </div>
    </div>
  )
}

export default Header