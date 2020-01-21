import React from 'react';
import ReactDOM from 'react-dom';

import './vendor/normalize.css'
import './style.css';

import Loader from './components/loader'
import CardListRender from './components/cardList';

// Тестовые статические данные
const data = [
  {
      "id": 1837300862,
      "address": "Юбилейный пр-т, 7",
      "title": "Под салон красоты",
      "previewImage": "http://134.209.138.34/images/5105863482.jpg",
      "price": "140 000 руб. в месяц"
  },
  {
      "id": 1849621339,
      "address": "Спартаковская ул., 5/7",
      "title": "2-к квартира, 85.5 м², 13/24 эт.",
      "previewImage": "http://134.209.138.34/images/5720316882.jpg",
      "price": "14 150 000 руб."
  },
  {
      "id": 1837041699,
      "address": "Московская область, Химки, микрорайон Сходня",
      "title": "Гараж, > 30 м²",
      "previewImage": "http://134.209.138.34/images/5846211478.jpg",
      "price": "5 000 руб. в месяц"
  },
  {
      "id": 1844885461,
      "address": "Ленинский пр-т, 1/2",
      "title": "Сниму 1-к квартиру",
      "userType": "private",
      "previewImage": "http://134.209.138.34/images/6328994293.jpg",
      "price": "25 000 руб. в месяц"
  },
  {
      "id": 1834903459,
      "address": "ул. 9 Мая, 21к2",
      "title": "Студия, 20 м², 9/25 эт.",
      "previewImage": "http://134.209.138.34/images/6347879989.jpg",
      "price": "1 800 руб. за сутки"
  },
  {
      "id": 1836910863,
      "address": "Московская область,Химки,Ховрино,,Германа Титова, 8",
      "title": "1-к квартира, 29 м², 2/17 эт.",
      "previewImage": "http://134.209.138.34/images/6347883387.jpg",
      "price": "4 500 000 руб."
  },
  {
      "id": 1789181986,
      "address": "Московская область, г. Химки, Ивакино мкр, 32кб",
      "title": "Дом 200 м² на участке 10 сот.",
      "previewImage": "http://134.209.138.34/images/6348558812.jpg",
      "price": "8 900 000 руб."
  },
  {
      "id": 1827095684,
      "address": "микрорайон Сходня, Юбилейный пр., 14",
      "title": "2-к квартира, 70 м², 9/17 эт.",
      "previewImage": "http://134.209.138.34/images/6384103138.jpg",
      "price": "2 700 руб. за сутки"
  },
  {
      "id": 1834470631,
      "address": "Россия, Московская область, Химки, Планерная, Ленинградская улица, 3к1",
      "title": "3-к квартира, 83 м², 13/15 эт.",
      "previewImage": "http://134.209.138.34/images/7858129027.jpg",
      "price": "7 500 000 руб."
  },
  {
      "id": 1833301402,
      "address": "микрорайон Клязьма-Старбеево, квартал Клязьма",
      "title": "Участок 45 сот. (промназначения)",
      "previewImage": "http://134.209.138.34/images/7883066898.jpg",
      "price": "14 400 000 руб."
  }
]

// нужно цеплять данные по fetch, нужен роутинг

// Рендер листа с карточками в который прокидываем статические данные для создания экземпляра карточки
ReactDOM.render(
  <CardListRender props={data} />, document.getElementById('root')
) 