import React from 'react'

const SideImg = ({state}) => {
  const {friends} = state
  return (
    <div>
          {friends.map(({img}) => {
        return <img src={img} alt="" />;
      })}
    </div>
  )
}

export default SideImg