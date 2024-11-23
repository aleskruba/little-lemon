import React from 'react'
import { dishes } from '../constants'

function Specials() {
  return (
<div className="wrapper">

{dishes.map((element,idx)=>(
            <div className="box">
            <h2 className='title'>{element.title}</h2>
            <p className='description'>{element.description} </p>
          

           <div className='image-div'>
             <img  className='image'
                src={element.image}
                 alt="flower" />
           </div>
           <div>
           <p className='price'>{element.price} </p>
           </div>
            
      </div>

))}





</div>
  )
}

export default Specials