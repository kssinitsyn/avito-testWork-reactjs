import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import './vendor/normalize.css'
import './style.css';

import CardList from './components/cardList';
import CardDetail from './components/cardDetail'


// Данные фетчатся на уровне компонента CardList, роутинг настроен не доконца
ReactDOM.render((
    <Router>
        <Route exact path="/" component={CardList} />
        <Route path='/:id' component={CardDetail} />
    </Router>
), document.getElementById('root')) 