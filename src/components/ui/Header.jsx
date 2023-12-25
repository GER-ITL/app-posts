import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import SideImg from './SideImg'
const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>

      <img src="https://cdn-icons-png.flaticon.com/512/1390/1390385.png" alt="" />
      </div>
      <div className={styles.label}>
      <h1>www.social_network</h1>
      </div>
      <SideImg/>
      <div className={styles.loginBlock}>
        
        <div>{props.isAuth ? props.login : <NavLink to={"/login"}>LogIn</NavLink> }</div>
        <div>{props.isAuth ? props.email : '' }</div>
        <div>{props.isAuth ? <span className={styles.logout} onClick={props.logout}>LogOut</span>: '' }</div>
      </div>
    </div>
  )
}

export default Header