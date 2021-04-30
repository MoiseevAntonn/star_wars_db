import React from "react";
import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from "../hoc-helpers";



const PlanetDetails = (props) => {
    return (
            <ItemDetails {...props}>
                    <Record field="rotationPeriod" label="Rotation period"/>
                    <Record field="diameter" label="Diameter"/>
             </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}


export default withSwapiService(PlanetDetails, mapMethodsToProps);