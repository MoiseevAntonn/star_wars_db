import React, {Component} from "react";
import ErrorBoundry from "../error-boundry";
import Row from "../row";


//import "./planet-page.css";
import { PlanetList, PlanetDetails } from "../sw-components";

export default class PlanetPage extends Component {

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
            <PlanetList     onItemSelected={this.onItemSelected} 
                            selectedItem={selectedItem}/>
        );

        const itemDetails = (
            <ErrorBoundry>
                <PlanetDetails itemId={selectedItem}/>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList}
                 right={itemDetails}/>
        )
    }
}