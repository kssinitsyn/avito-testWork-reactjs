import React from 'react';
import Card from './card';
import '../style.css';


const CardList = (props) => {
  return (
    <ul className="card__list">
      {props.props.map((item, index) => (
        <Card key={index} item={item} /> 
      ))}
    </ul>
  )
}

export default CardList;
