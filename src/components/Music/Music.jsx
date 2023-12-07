import React from 'react'
import ItemMusic from './ItemMusic/ItemMusic'

const Music = ({musicPage,onSearchClick, onUpdateSearch }) => {
  let newIteMusicBody = musicPage.newIteMusicBody
  const onSearch = ()=>{
    onSearchClick()
  }
  const onUpdate = (e)=>{
    let body = e.target.value
    onUpdateSearch(body)
  }
  return (
    <div className='music'>
      <h1>Music</h1>
      {musicPage.musicData.map((musicItem)=>{
         return <ItemMusic key = {musicItem.id} label = {musicItem.label} time = {musicItem.time}/>
      })} 
      <button onClick={onSearch}>Search</button>
      <input value={newIteMusicBody} onChange={onUpdate} placeholder='enter label..'></input>
    </div>
  )
}

export default Music