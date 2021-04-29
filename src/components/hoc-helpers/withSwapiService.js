import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService = (Wrap, mapMethodsToProps) => {
    return (props)=>{
        return (
            <SwapiServiceConsumer>
                {(swapiService) => {
                    const serviceProps = mapMethodsToProps(swapiService); 

                    return (
                        <Wrap {...props} {...serviceProps}/>
                    )
                }}
            </SwapiServiceConsumer>
        )
    }
};

export default withSwapiService;