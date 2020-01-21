import React from "react"
import "../style.css"
import {Link} from 'react-router-dom'

// Экземпляр карточки
const Card = (props) => {
    return (
        <li key={props.item.id} id={props.item.id} className="card__item">
            <Link className="card__link" to={props.item.id}>
                <img className="card__image" src={props.item.previewImage} alt={props.item.title}/>
                <div className="card__text-wrapper">
                    <h2 className="card__title"> {props.item.title} </h2>
                    <p className="card__address"> {props.item.address} </p>
                    <p className="card__price"> {props.item.price} </p>
                </div>
            </Link>
        </li>
    )
}

export default Card;
