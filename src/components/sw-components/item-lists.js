import { withData, withChildFunction, withSwapiService } from "../hoc-helpers";
import ItemList from "../item-list";

const renderPersonName = i => `${i.name} (${i.gender}, ${i.birthYear})`
const renderPlanetName = i => `${i.name} (${i.population})`;
const renderStarshipName = i => `${i.name}`;

const mapMethodsToPropsPerson = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapMethodsToPropsPlanet = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapMethodsToPropsStarship = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};


const PersonList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderPersonName )), 
                        mapMethodsToPropsPerson);

const PlanetList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderPlanetName )),
                        mapMethodsToPropsPlanet);

const StarshipList = withSwapiService(
                        withData(
                            withChildFunction(ItemList, renderStarshipName ),
                        mapMethodsToPropsStarship));

export {
    PersonList,
    PlanetList,
    StarshipList
}