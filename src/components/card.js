import React from "react"
import "../style.css"

// Экземпляр карточки
export default class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <li key={this.props.props.id} id={this.props.props.id} className="card__item" onClick={
                (e)=>{
                    const id = e.currentTarget.getAttribute('id')
                    localStorage.setItem('id', id)
                    window.open(`/item/${id}`, '_blank')
                }}
                >
                    <img className="card__image" src={this.props.props.previewImage} alt={this.props.props.title}/>
                    <div className="card__text-wrapper">
                        <h2 className="card__title"> {this.props.props.title} </h2>
                        <p className="card__address"> {this.props.props.address} </p>
                        <p className="card__price"> {this.props.props.price} </p>
                    </div>
            </li>
        )
}
}