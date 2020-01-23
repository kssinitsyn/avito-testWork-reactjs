import React from "react"
import "../style.css"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CardDetail from '../components/cardDetail'


// Экземпляр карточки
export default class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentIdCard: '/'
        }
    }

    render() {
        return (
            <li key={this.props.props.id} id={this.props.props.id} className="card__item" onClick={
                (e)=>{this.setState({
                    currentIdCard: e.currentTarget.getAttribute('id')
                })}}
                >
                <Link className="card__link" to={this.state.currentIdCard}>
                    <img className="card__image" src={this.props.props.previewImage} alt={this.props.props.title}/>
                    <div className="card__text-wrapper">
                        <h2 className="card__title"> {this.props.props.title} </h2>
                        <p className="card__address"> {this.props.props.address} </p>
                        <p className="card__price"> {this.props.props.price} </p>
                    </div>
                </Link>
            </li>
        )
}
}