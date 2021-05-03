import React from "react";
import {withRouter} from "react-router-dom";

//import "./planet-page.css";
import { StarshipList } from "../sw-components";

const StarshipPage = ({history}) => {
    return (
        <StarshipList  selectedItem={"1"}
                       onItemSelected={id=>{history.push(id)}}/>
    )
};

export default withRouter(StarshipPage);