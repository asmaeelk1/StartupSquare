import React from 'react'
import {data2} from './contentcards2.js';
export default function Cards2() {
  return (
    <div>
      {data2.map((item , index)=>{
        return(
          <Cards
          key={index}
          img={item.img}
          titel={item.titel}
          description={item.description}
          />
        )
      })}
    </div>
  )
}

