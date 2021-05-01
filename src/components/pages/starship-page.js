import React, {Component} from "react";
import ErrorBoundry from "../error-boundry";
import Row from "../row";


//import "./planet-page.css";
import { StarshipList, StarshipDetails } from "../sw-components";

export default class StarshipPage extends Component {

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
            <StarshipList   onItemSelected={this.onItemSelected} 
                            selectedItem={selectedItem}/>
        );

        const itemDetails = (
            <ErrorBoundry>
                <StarshipDetails itemId={selectedItem}/>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList}
                 right={itemDetails}/>
        )
    }
}