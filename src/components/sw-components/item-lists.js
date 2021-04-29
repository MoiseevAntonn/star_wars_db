import SwapiService from "../../services/swapi-service";
import { withData, withChildFunction } from "../hoc-helpers";
import ItemList from "../item-list";

const {getAllPeople, getAllPlanets, getAllStarships} = new SwapiService;

const renderPersonName = i => `${i.name} (${i.gender}, ${i.birthYear})`
const renderPlanetName = i => `${i.name} (${i.population})`;
const renderStarshipName = i => `${i.name}`;


const PersonList = withData(
                            withChildFunction(ItemList, renderPersonName ), 
                            getAllPeople);

const PlanetList = withData(
                            withChildFunction(ItemList, renderPlanetName ), 
                            getAllPlanets);

const StarshipList = withData(
                            withChildFunction(ItemList, renderStarshipName ), 
                            getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}