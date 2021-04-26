import React, {Component} from "react";
import ItemDetails, {Record} from "../item-details";
import ItemList from "../item-list";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import SwapiService from "../../services/swapi-service";

import "./planet-page.css";

export default class PlanetPage extends Component {

    swapiService = new SwapiService();

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
            <ItemList   onItemSelected={this.onPlanetSelected} 
                        selectedItem={selectedPlanet}
                        getData={this.swapiService.getAllPlanets}>
                    
                    {(i) => `${i.name} (${i.population})`}

            </ItemList>
        );

        const planetDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={selectedPlanet}
                             getData={this.swapiService.getPlanet}
                             getImageUrl={this.swapiService.getPlanetImage}>

                                 <Record field="rotationPeriod" label="Rotation period"/>
                                 <Record field="diameter" label="Diameter"/>
                </ItemDetails>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList}
                 right={planetDetails}/>
        )
    }
}