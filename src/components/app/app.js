import React from 'react';

import "./app.css";

import Header from '../header';
import ItemList from "../item-list";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";

//index.js - паттерн для более удобного импорта 


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