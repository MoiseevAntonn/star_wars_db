import React, {Component} from 'react';

import "./app.css";

import Header from '../header';
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetPage, StarshipPage, LoginPage, SecretPage} from "../pages";
import SwapiService from "../../services/swapi-service";

import {SwapiServiceProvider} from "../swapi-service-context";
import ErrorBoundry from '../error-boundry';

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import { StarshipDetails } from '../sw-components';

//index.js - паттерн для более удобного импорта 

//Итоги:1.React ничего не знает о работе с сервером - это задача других библиотек
//2.Сетевой код следует изолировать от кода компонентов
//3.Делать парсинг данных после их получения 
//4.Обрабатывать состояния загрузка и ошибка
//!5.Разделять ответственность компонентов- логика и рендеринг


class App extends Component {
    state = {
        showRandomPlanet : true,
        isLoggedIn: false
    };

    swapiService = new SwapiService();

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render(){

        const {showRandomPlanet, isLoggedIn} = this.state;

        return (
            
            <div className="app">
                <ErrorBoundry>
                    <SwapiServiceProvider value={this.swapiService}>
                        <Router>
                            <Header/>
                            <RandomPlanet showRandomPlanet={showRandomPlanet}/>

                            <Switch>
                                <Route path="/" render={()=><h2>Welome to StarDB</h2>} exact/>
                    
                                <Route path="/people/:id?" render={(props) => {
                                    return <PeoplePage {...props}/>
                                }}/>
                                <Route path="/planets" component={PlanetPage}/>
                                <Route path="/starships" component={StarshipPage} exact/>
                                <Route path="/starships/:id" render={({match, location, history})=>{
                                    const id = match.params.id;
                                    return <StarshipDetails itemId={id}/>
                                }}/>
                                <Route path="/login" render={()=>{
                                    return <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>
                                }}/>
                                <Route path="/secret" render={()=>{
                                    return <SecretPage isLoggedIn={isLoggedIn}/>
                                }}/>

                                <Redirect to="/"/>
                            </Switch>
                
                        </Router>
                    </SwapiServiceProvider>
                </ErrorBoundry>
            </div>
        )
    }
}

export default App;