import React from 'react';
import './card.css'

export default function card(props) {
  return (
    <div>
      <div className="card">
  <img src={props.img} className="card-img-top " alt="card image"/>
  <div className="card-body">
    <span className='remarque'>{props.remarque}</span>
    <h2 className="card-title titre-card">{props.titel}</h2>
    <p className="card-text">{props.description}</p>
  </div>
</div>
    </div>
  )
}
