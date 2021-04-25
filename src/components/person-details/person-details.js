import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./person-details.css";

export default class PersonDetails extends Component{

    swapiService = new SwapiService();

    state = {
        personDetails : null,
        loaded: false,
        hasError: false,
    };

    componentDidMount(){
        this.updatePersonDetails();
    };

    componentDidUpdate(prevProps, prevState){
        if (prevProps.personId !== this.props.personId){
            this.updatePersonDetails();
            this.setState({
                hasError: false
            });
        } 
    };

    updatePersonDetails(){
        const {personId} = this.props;

        if (!personId) return;

        this.setState({
            loaded: false
        })

        this.swapiService
            .getPerson(personId)
            .then(this.onPersonDetailsLoaded)
            .catch(this.onError)
    };

    onPersonDetailsLoaded = (personDetails) => {
        this.setState({
            personDetails,
            loaded: true
        })
    };

    onError = (erorr) => {
        this.setState({
            hasError : true,
            loaded: true
        })
    }

    render(){

        const {personDetails, loaded, hasError} = this.state;

        if (!personDetails){
            return <span>Select person from a list</span>
        }

        const hasData = !(!loaded || hasError);

        const errorMessage = hasError ? <ErrorIndicator/>:null
        const spinner = loaded ? null : <Spinner/>
        const content = hasData ? <PersonDetailsView personDetails={personDetails}/> : null;

        return(
            <div className="person-details card">
                {errorMessage}
                {spinner}
                {content} 
            </div>
        )
    }
};

const PersonDetailsView = ({personDetails: {id, name, gender, birthYear, eyeColor}}) => {
    return (
        <React.Fragment>
            <img className="person-image" 
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>

        </React.Fragment>
    )
}