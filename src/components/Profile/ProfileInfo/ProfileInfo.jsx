import React from 'react'
import './../../../styles/App.scss'
const ProfileInfo = (props) => {
  return (
    <div className="profile_info">
    <div>
      <img
        src="https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg"
        alt=""
      />
    </div>
    <div className="description">
      <h2>Dmitriy K.</h2>
      <div>Data of Birth: 2 january</div>
      <div>Citi: Minsk</div>
      <div>Education: BSU'11</div>
    </div>
  </div>
  )
}

export default ProfileInfo