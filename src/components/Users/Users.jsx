import React from 'react'
import styles from './Users.module.scss'
import User from './User'
const Users = ({usersPage}) => {
    const {users} = usersPage
  return (
    <div className={styles.usersPage}>
        <h1>USERS WILL BE HERE</h1>
        <div className = {styles.usersBlock}>
        {users.map((user)=>{return <User key={user.id} user={user}/>})}

        </div>
    </div>
  )
}

export default Users