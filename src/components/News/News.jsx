import React from 'react'
import New from './New/New'

const News = ({newsPage}) => {
  const{news} = newsPage
  return (
    <div className='news'>
      <h1>News</h1>
       {news.map(n => {
        return <New key= {n.id} label = {n.label}/>
       })}
    </div>
  )
}

export default News