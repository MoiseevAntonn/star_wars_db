import React from 'react';

import "./app.css";

import Header from '../header';
import ItemList from "../item-list";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";

//index.js - паттерн для более удобного импорта 

//Итоги:1.React ничего не знает о работе с сервером - это задача других библиотек
//2.Сетевой код следует изолировать от кода компонентов
//3.Делать парсинг данных после их получения 
//4.Обрабатывать состояния загрузка и ошибка
//!5.Разделять ответственность компонентов- логика и рендеринг


const App = ()=>{
    return (
        <div className="app">
            <Header/>
            <RandomPlanet/>

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList/>
                </div>

                <div className="col-md-6">
                    <PersonDetails/>
                </div>
            </div>
        </div>
    )
};

export default App;