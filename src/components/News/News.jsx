import React from 'react'
import New from './New/New'

const News = (props) => {
  return (
    <div className='news'>
      <h1>News</h1>
       {props.state.news.map(n => {
        return <New key= {n.id} label = {n.label}/>
       })}
    </div>
  )
}

export default News