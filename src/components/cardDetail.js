import React from 'react'
import {Link} from 'react-router-dom'
import Loader from '../components/loader'
import Slider from './slider'

export default class CardDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isFetching: true,
            error: null
        }
    }

    componentDidMount() {
        const id = localStorage.id
        fetch(`http://134.209.138.34/item/${id}`)
            .then(res=>res.json())
            .then(res => this.setState({
                data: res[0],
                isFetching: false,
            }))
            .catch(e => this.setState({
                isFetching: false,
                error: e
              })
            )}

    render() {
        const {data, isFetching} = this.state;           

        if(isFetching) {
            return <Loader />
        }

        return (
            <div className="card-detail__item">
                <Link  to="/">
                    <button className="card-detail__back-button">Назад</button>
                </Link>
                <div className="card-detail__info">
                    <h1 className="">Назначение: {this.state.data.title}</h1>
                    <p className="">Адрес: {this.state.data.address}</p>
                    <p className="">Описание: {this.state.data.description}</p>
                    <p className="">Цена: {this.state.data.price}</p>
                    <p className="">Продавец: {this.state.data.sellerName}</p>
                </div>
                <Slider className="main-carousel" options={{
                    wrapAround: true,
                    fullscreen: true,
                    adaptiveHeight: true,
                    fade: true}}>
                    {data.images.map((item, index) => (
                        <div key={index} className="carousel-cell">
                            <img key={index} src={item} alt={this.state.data.title} />
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}