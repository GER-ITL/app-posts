import React from 'react'

const SideImg = (props) => {
  return (
    <div>
          {props.state.friends.map((friend) => {
        return <img src={friend.img} alt="" />;
      })}
    </div>
  )
}

export default SideImg