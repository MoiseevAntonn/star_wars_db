import React, {Component} from 'react';

import "./app.css";

import Header from '../header';
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import PlanetPage from "../planet-page";
import SwapiService from "../../services/swapi-service";

import {SwapiServiceProvider} from "../swapi-service-context";
import ErrorBoundry from '../error-boundry';

//index.js - паттерн для более удобного импорта 

//Итоги:1.React ничего не знает о работе с сервером - это задача других библиотек
//2.Сетевой код следует изолировать от кода компонентов
//3.Делать парсинг данных после их получения 
//4.Обрабатывать состояния загрузка и ошибка
//!5.Разделять ответственность компонентов- логика и рендеринг

class App extends Component {
    state = {
        showRandomPlanet : true,
    };

    swapiService = new SwapiService();

    render(){

        const {showRandomPlanet} = this.state;

        return (
            
            <div className="app">
                <ErrorBoundry>
                    <SwapiServiceProvider value={this.swapiService}>
                        <Header/>
                        <RandomPlanet showRandomPlanet={showRandomPlanet}/>
            
                        <PeoplePage/>
                        <PlanetPage/>
                    </SwapiServiceProvider>
                </ErrorBoundry>
            </div>
        )
    }
}

export default App;