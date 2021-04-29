import React from "react";
import ItemDetails, {Record} from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context";

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {({getStarship, getStarshipImage})=> {
                return (
                    <ItemDetails itemId={itemId}
                     getImageUrl={getStarshipImage}
                     getData={getStarship}>
                        <Record field="rotationPeriod" label="Rotation period"/>
                        <Record field="diameter" label="Diameter"/>
                </ItemDetails>
                )
            }}
        </SwapiServiceConsumer>
    )
};

export default StarshipDetails;