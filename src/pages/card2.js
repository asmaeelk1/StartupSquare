import React from 'react';
import './card2.css'

export default function card(props) {
  return (
    <div>
      <div className="card">
  <img src={props.img} className="card-img-top " alt="card image"/>
  <div className="card-body">
    <h2 className="card-title titre-card">{props.titel}</h2>
    <p className="card-text cardtext2">{props.description}</p>
  </div>
</div>
    </div>
  )
}