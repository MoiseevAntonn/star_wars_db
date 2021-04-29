import React, {Component} from "react";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {PersonList, PersonDetails} from "../sw-components";

import "./people-page.css";


export default class PeoplePage extends Component {

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
            <PersonList   
                onItemSelected={this.onPersonSelected} 
                selectedItem={selectedPerson}/>
        );

        const personDetails = (
            <ErrorBoundry>
                <PersonDetails itemId={selectedPerson}/>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList}
                 right={personDetails}/>
        )
    }
};