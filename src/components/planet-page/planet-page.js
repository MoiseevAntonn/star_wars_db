import React, {Component} from "react";
import ErrorBoundry from "../error-boundry";
import Row from "../row";


import "./planet-page.css";
import { PlanetList, PlanetDetails } from "../sw-components";

export default class PlanetPage extends Component {

    state = {
        selectedPlanet : null,
    };

    onPlanetSelected = (id) =>{
        this.setState({
            selectedPlanet : id
        })
    };


    render(){

        const {selectedPlanet} = this.state;

        const itemList = (
            <PlanetList   onItemSelected={this.onPlanetSelected} 
                        selectedItem={selectedPlanet}/>
        );

        const planetDetails = (
            <ErrorBoundry>
                <PlanetDetails itemId={selectedPlanet}/>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList}
                 right={planetDetails}/>
        )
    }
}