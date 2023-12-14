import React from 'react'
import styles from "../Users/Users.module.scss";
import preloader from "../../assets/img/preview.gif";

const Preloader = () => {
  return (
    <div><img className={styles.preloader} src={preloader} alt="" /></div>
  )
}

export default Preloader