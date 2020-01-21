import React from 'react';
import Card from './card';
import '../style.css';

export default class CardList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isFetching: true,
      error: null
    };
  }

    componentDidMount() {
      fetch('http://134.209.138.34/items')
        .then(res => res.json())
        .then(res => this.setState({
          data: res,
          isFetching: false,
        }))
        .catch(e => {
          this.setState({
            isFetching: false,
            error: e
        })
        })
    }

    render() {
      const {data, isFetching, error } = this.state;

      if(isFetching) {
        return <div>Loading...</div>
      }

      return (
        <ul className="card__list">
          {data.map((item, index) => (
            <Card key={index} item={item} /> 
          ))}
        </ul>
      )
    }
  }