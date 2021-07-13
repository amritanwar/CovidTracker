import React from 'react';
import './Card.css';


const Card = (props)=>{
    return(
        <div className = 'box'>
          <p className='s'>{props.small} {props.large}</p>
          
          
          <p className='l' >{props.value}</p>
        </div>
    )
}

export default Card;