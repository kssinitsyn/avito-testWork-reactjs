import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


import './vendor/normalize.css'
import 'flickity/css/flickity.css'
import './style.css'

import CardList from './components/cardList';
import CardDetail from './components/cardDetail'

// Данные фетчатся на уровне компонента CardList, роутинг настроен не доконца
ReactDOM.render((
    <BrowserRouter>
        <Route exact path="/" component={CardList} />
        <Route path='/:id' component={CardDetail} />
    </BrowserRouter>
), document.getElementById('root')) 