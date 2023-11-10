import React from 'react'
import styles from './../Messages.module.scss'
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
    let path = '/messages/' + props.id
  return (
    <div className={styles.dialog_item}>
    <NavLink className={styles.dialog} to={path}>{props.name}</NavLink>
  </div>
  )
}

export default Dialogs