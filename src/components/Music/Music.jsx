import React from 'react'

const Music = ({state}) => {
  const {label} = state
  return (
    <div className='music'>
      <h1>Music {label}</h1>
      
    </div>
  )
}

export default Music