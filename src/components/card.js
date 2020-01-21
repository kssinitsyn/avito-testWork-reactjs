import React from "react"
import "../style.css"

// Экземпляр карточки
const Card = (props) => {
    return (
        <li key={props.item.id} id={props.item.id} className="card__item">
            <a className="card__link" href="#">
                <img className="card__image" src={props.item.previewImage} alt={props.item.title}/>
                <div className="card__text-wrapper">
                    <h2 className="card__title"> {props.item.title} </h2>
                    <p className="card__address"> {props.item.address} </p>
                    <p className="card__price"> {props.item.price} </p>
                </div>
            </a>
        </li>
    )
}

export default Card;
