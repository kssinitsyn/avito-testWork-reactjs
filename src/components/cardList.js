import React from 'react';
import Card from './card';
import Loader from './loader';

import '../style.css';

// Рендер списка карточек
export default class CardList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isFetching: true,
      error: null
    };
  }

  // Получаем данные
    componentDidMount() {
      fetch('http://134.209.138.34/items')
        .then(res => res.json())
        .then(res => this.setState({
          data: res,
          isFetching: false,
        }))
        // Ошибка валит все, надо разобраться
        .catch(e => this.setState({
          isFetching: false,
          error: e
        }))
    }

    render() {
      const {data, isFetching, error } = this.state;

      // Если данных нет, то запускаем лоудер
      if(isFetching) {
        return <Loader />
      }
      // Если ошибка, то рендерим ее
      if(error) {
        return (
        <div>{error}</div>
        )
      }

      // Если все ок, рендерим список
      return (
        <ul className="card__list">
          {data.map((item, index) => (
            <Card key={index} props={item} /> 
          ))}
        </ul>
      )
    }
  }