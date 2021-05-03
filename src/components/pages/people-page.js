import React from "react";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {PersonList, PersonDetails} from "../sw-components";
import {withRouter} from "react-router-dom";

//import "./people-page.css";


const PeoplePage = ({match, history}) => {

        const id = match.params.id ? match.params.id : null;

        const itemList = (
            <PersonList   
                onItemSelected={(id)=>{history.push(id)}} 
                selectedItem={id}/>
        );

        const itemDetails = (
            <ErrorBoundry>
                <PersonDetails itemId={id}/>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList}
                 right={itemDetails}/>
        )
};

export default withRouter(PeoplePage);