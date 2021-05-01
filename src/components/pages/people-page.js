import React, {Component} from "react";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {PersonList, PersonDetails} from "../sw-components";

//import "./people-page.css";


export default class PeoplePage extends Component {

    state = {
        selectedItem : null,
    };

    onItemSelected = (id) =>{
        this.setState({
            selectedItem : id
        })
    };


    render(){

        const {selectedItem} = this.state;

        const itemList = (
            <PersonList   
                onItemSelected={this.onItemSelected} 
                selectedItem={selectedItem}/>
        );

        const itemDetails = (
            <ErrorBoundry>
                <PersonDetails itemId={selectedItem}/>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList}
                 right={itemDetails}/>
        )
    }
};