import React from 'react'
import {Link} from 'react-router-dom'

const CardDetail = (props) => {
    return (
        <div className="card-detail__item">
            <Link  to="/">
                <button className="card-detail__back-button">Назад</button>
            </Link>
            <div className="card-detail__info">
                <h1 className="">Назначение: </h1>
                <p className="">Адрес: </p>
                <p className="">Описание: </p>
                <p className="">Цена: </p>
                <p className="">Продавец: </p>
            </div>
            <div className="gallery">
                {/* массив карточек прилетает по fetch надо обработать и вывести в слайдер, наверное слик */}
            </div>
        </div>
    )
}

export default CardDetail