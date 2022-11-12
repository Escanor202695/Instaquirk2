import React from 'react'
import "./gservice.css"
function service({title,image}) {
  return (
    <div className='graphic_service'>
         <img src={image}/>
         <h3>{title}</h3>
    </div>
  )
}

export default service