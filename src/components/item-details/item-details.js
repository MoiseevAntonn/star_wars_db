import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./item-details.css";

//Можно делать экспорт связанных компонент

class Record extends Component {
    render(){
        const {field, label, item} = this.props;

        return (
            <li className="list-group-item">
                    <span className="term">{label}</span>
                    <span>{item[field]}</span>
            </li>
        )
    }
};

export {
    Record
}


export default class ItemDetails extends Component{

    swapiService = new SwapiService();

    state = {
        itemDetails : null,
        image: null,
        loaded: false,
        hasError: false,
    };

    componentDidMount(){
        this.updateItemDetails();
    };

    componentDidUpdate(prevProps, prevState){
        if (prevProps.itemId !== this.props.itemId){
            this.updateItemDetails();
            this.setState({
                hasError: false
            });
        } 
    };

    updateItemDetails(){
        const {itemId, getData } = this.props;

        if (!itemId) return;

        this.setState({
            loaded: false
        })

        getData?.(itemId)
            .then(this.onItemDetailsLoaded)
            .catch(this.onError)
    };

    onItemDetailsLoaded = (itemDetails) => {
        const {getImageUrl} = this.props;

        this.setState({
            itemDetails,
            image: getImageUrl(itemDetails),
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

        const {itemDetails, loaded, hasError, image} = this.state;
        const records = this.props.children;
        const modifiedRecords = React.Children.map(records, (record, i) => {
            return React.cloneElement(record , {item: itemDetails})
        })

        if (!itemDetails){
            return <span>Select item from a list</span>
        }

        const hasData = !(!loaded || hasError);

        const errorMessage = hasError ? <ErrorIndicator/>:null
        const spinner = loaded ? null : <Spinner/>
        const content = hasData ? <ItemDetailsView itemDetails={itemDetails} image={image} records={modifiedRecords}/> : null;

        return(
            <div className="item-details card">
                {errorMessage}
                {spinner}
                {content} 
            </div>
        )
    }
};

const ItemDetailsView = ({itemDetails: {id, name}, image, records}) => {

    return (
        <React.Fragment>
            <img className="item-image" 
                     src={image}/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {records}
                    </ul>

                    <button class="btn btn-danger" 
                            onClick={()=>{this.setState({hgj: this.state.asd.asd })}}>
                                Throw Error
                    </button>
                </div>

        </React.Fragment>
    )
}