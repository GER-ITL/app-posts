import React, { useState } from 'react'
import styles from './Sidebar.module.scss'
import Messages from '../Messages/Messages'

const Sidebar = () => {
   const [isFormVis, setCheckProfile] = useState(false)
  const checkProfile = ()=>{
    setCheckProfile(true)
  }
  const checkMessages = ()=>{
    console.log('go')
  }
  const checkNews = ()=>{
    console.log('go')
  }
  const checkMusic = ()=>{
    console.log('go')
  }
  const checkSettings = ()=>{
    console.log('go')
  }
  return (
    <div className={styles.sidebar}>
      {isFormVis &&  <><Messages/></>}
        <button onClick={checkProfile}>Profile</button>
        <button onClick={checkMessages}>Messages</button>
        <button onClick={checkNews}>News</button>
        <button onClick={checkMusic}>Music</button>
        <button onClick={checkSettings}>Settings</button>
    </div>
  )
}

export default Sidebar