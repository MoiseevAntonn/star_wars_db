import React , {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import "./random-planet.css";

//Удобно делать setState в отдельной ф-ции для улучщения читабельности кода (onPlanetLoaded)
//удобно хранить весь объект данных в state, а потом в рендере делать его деструктуризацию
//Для того,чтобы уместить спинер и остальной код компонента и не уродовать код, код компонента можно вынести приватно отдельно
//Для того,чтобы вернуть несколько компонентов, не вводя искусственную div обертку - можем использовать React Fragment
//JSX никак не раегирует на null, если вернуть его в render
//Разделение обязанностей - есть 2 вида компонентов. Одни занимаются только отображением, другие - чисто только логикой


export default class RandomPlanet extends Component{

    constructor(){
        super();
        this.swapiService = new SwapiService();
        this.state = {
            planet: {},
            loading: true
        };
        this.updatePlanet();
    }

    updatePlanet(){
        const id = Math.floor(Math.random()*10) + 2;

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    };

    onPlanetLoaded = (planet)=>{
        this.setState({
            planet, 
            loading: false
        });
    };

    render(){
        const {planet, loading } = this.state;

        const spinner = loading ? <Spinner/>: null;
        const content = !loading ? <PlanetView planet={planet}/>: null;

        return(
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
            </div>
        )
    }
};

const PlanetView = ({planet}) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    )
}