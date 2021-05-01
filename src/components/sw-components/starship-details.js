import React from "react";
import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from "../hoc-helpers";

const StarshipDetails = (props) => {
    return (
            <ItemDetails {...props}>
                    <Record field="name" label="Name"/>
                    <Record field="manufacturer" label="Manufacturer"/>
                    <Record field="model" label="Model"/>
                    <Record field="passengers" label="Passengers"/>
            </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getImageUrl: swapiService.getStarshipImage,
        getData: swapiService.getStarship
    }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);