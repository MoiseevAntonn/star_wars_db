import React, {Component} from "react";
import ItemDetails, {Record} from "../item-details";
import ItemList from "../item-list";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import SwapiService from "../../services/swapi-service";

import "./people-page.css";


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson : null,
    };

    onPersonSelected = (id) =>{
        this.setState({
            selectedPerson : id
        })
    };


    render(){

        const {selectedPerson} = this.state;

        const itemList = (
            <ItemList   onItemSelected={this.onPersonSelected} 
                        selectedItem={selectedPerson}
                        getData={this.swapiService.getAllPeople}>
                    
                    {(i) => `${i.name} (${i.gender}, ${i.birthYear})`}

            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={selectedPerson}
                             getData={this.swapiService.getPerson}
                             getImageUrl={this.swapiService.getPersonImage}>
                    <Record field="gender" label="Gender"/>
                    <Record field="birthYear" label="Birth year"/>
                    <Record field="eyeColor" label="Eye color"/>
                </ItemDetails>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList}
                 right={personDetails}/>
        )
    }
};