import React , {Component} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import PropTypes from "prop-types";

import { withSwapiService } from "../hoc-helpers";

import "./random-planet.css";

//можно выносить опеределние state из конструктора
//Удобно делать setState в отдельной ф-ции для улучщения читабельности кода (onPlanetLoaded)
//удобно хранить весь объект данных в state, а потом в рендере делать его деструктуризацию
//Для того,чтобы уместить спинер и остальной код компонента и не уродовать код, код компонента можно вынести приватно отдельно
//Для того,чтобы вернуть несколько компонентов, не вводя искусственную div обертку - можем использовать React Fragment
//JSX никак не раегирует на null, если вернуть его в render
//Разделение обязанностей - есть 2 вида компонентов. Одни занимаются только отображением, другие - чисто только логикой
//Если делаем импорт картинки в переменную - в ней будет лежать url, который можно пропихнуть в image 


class RandomPlanet extends Component{

    static defaultProps = {
        updateInterval: 2000
    };

    static propTypes= {
        updateInterval: PropTypes.number
    }

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount(){
        const {updateInterval} = this.props;

        this.updatePlanet();
        this.interval = setInterval(() => this.updatePlanet(), updateInterval)
    }

    componentDidUpdate(){
    
    };

    componentWillUnmount(){
        clearInterval(this.interval);
    };

    updatePlanet(){
        const id = Math.floor(Math.random()*10) + 2;
        //const id = 12000
        this.props.getData(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    onPlanetLoaded = (planet)=>{
        this.setState({
            planet, 
            loading: false
        });
    };

    render(){
        const {planet, loading, error} = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/>: null;
        const content = hasData ? <PlanetView planet={planet}/>: null;

        return(
            <div className="random-planet jumbotron rounded">
                {errorMessage}
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
            <img className="planet-image" 
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                 alt=""/>
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
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet
    }
};


export default withSwapiService(RandomPlanet, mapMethodsToProps);