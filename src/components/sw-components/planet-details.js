import React from "react";
import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from "../hoc-helpers";



const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {({getPlanet, getPlanetImage})=> {
                return (
                    <ItemDetails itemId={itemId}
                     getImageUrl={getPlanetImage}
                     getData={getPlanet}>
                        <Record field="rotationPeriod" label="Rotation period"/>
                        <Record field="diameter" label="Diameter"/>
                </ItemDetails>
                )
            }}
        </SwapiServiceConsumer>
    )
};

export default PlanetDetails;