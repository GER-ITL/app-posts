import React from 'react'
import ItemMusic from './ItemMusic/ItemMusic'
import { searchMusicCreator, updateNewMusicBodyCreator } from '../../redux/reducers/music-reducer'

const Music = ({store}) => {
  const {musicPage} = store.getState()
  let newIteMusicBody = musicPage.newIteMusicBody
  const onSearchClick = ()=>{
    store.dispatch(searchMusicCreator())
  }
  const onUpdateSearch = (e)=>{
    let body = e.target.value
    store.dispatch(updateNewMusicBodyCreator(body))
  }
  return (
    <div className='music'>
      <h1>Music</h1>
      {musicPage.musicData.map((musicItem)=>{
         return <ItemMusic key = {musicItem.id} label = {musicItem.label} time = {musicItem.time}/>
      })} 
      <button onClick={onSearchClick}>Search</button>
      <input value={newIteMusicBody} onChange={onUpdateSearch} placeholder='enter label..'></input>
    </div>
  )
}

export default Music