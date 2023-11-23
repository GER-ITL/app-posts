import React from 'react'
import styles from './../Messages.module.scss'
import { NavLink } from "react-router-dom";

const Dialogs = ({name,id}) => {
    let path = '/messages/' + id
  return (
    <div className={styles.dialog_item}>
    <NavLink className={styles.dialog} to={path}>{name}</NavLink>
  </div>
  )
}

export default Dialogs