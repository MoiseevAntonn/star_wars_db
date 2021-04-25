import React, {Component} from "react";
import Spinner from "../spinner";

import "./item-list.css";

//Обернем вывод людей, планет и тд в страницы и в них сделаем componentDidCatch 

export default class ItemList extends Component {


    state = {
        itemList : null,
    };

    componentDidMount(){
        const {getData} = this.props;

        getData()
            .then((itemList)=>{
                this.setState({
                    itemList 
                })
            })
    };

    renderItems = (items) => {
        const {selectedItem, renderItem} = this.props;

        return items.map((item) => {
            const {id} = item;
            const label = renderItem(item);

            return (
                <li className={`list-group-item ${id == selectedItem ? "active":""}`}
                    key={id}
                    onClick={()=>this.onItemSelect(id)}>{label}</li>
            )
        })
    };

    onItemSelect = (id) => {
        this.props.onItemSelected?.(id)
    };

    render(){

        const {itemList} = this.state;

        if (!itemList){
            return <Spinner/> 
        }

        return(
            <ul className="item-list list-group">
                {this.renderItems(itemList)}
            </ul>
        )
    }
}