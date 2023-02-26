import React from 'react'
import "./Empty.css"
function Empty(p) {
  return (
    <div className='empty'>
        <img src={p.url} alt="rasm bo'ladi" />
        <h2>{p.title}</h2>
    </div>
  )
}

export default Empty