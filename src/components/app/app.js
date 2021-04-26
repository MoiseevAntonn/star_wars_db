import React, {Component} from 'react';

import "./app.css";

import Header from '../header';
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import PlanetPage from "../planet-page";

//index.js - паттерн для более удобного импорта 

//Итоги:1.React ничего не знает о работе с сервером - это задача других библиотек
//2.Сетевой код следует изолировать от кода компонентов
//3.Делать парсинг данных после их получения 
//4.Обрабатывать состояния загрузка и ошибка
//!5.Разделять ответственность компонентов- логика и рендеринг

class App extends Component {
    state = {
        showRandomPlanet : true,
        
        hasError: false
    };

    

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    };

    render(){

        const {showRandomPlanet, hasError} = this.state;

        if (hasError){
            return <span>Something happened</span>
        };

        return (
            <div className="app">
                <Header/>
                <RandomPlanet showRandomPlanet={showRandomPlanet}/>
    
                <PeoplePage/>
                <PlanetPage/>
            </div>
        )
    }
}

export default App;