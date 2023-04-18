import React from 'react';

export default function valuesMold(props) {
  return (
    <div>
         <div className='valeur'>
          <div>{props.icone}</div>
          <h4>{props.titre}</h4>
          <p className='card-text'>{props.description}</p>
        </div>
    </div>
  )
}
