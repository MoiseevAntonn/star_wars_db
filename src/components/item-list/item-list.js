import React from "react";

import "./item-list.css";

//Обернем вывод людей, планет и тд в страницы и в них сделаем componentDidCatch 

/*export default class ItemList extends Component {


    renderItems = (items) => {
        const {selectedItem} = this.props;

        return items.map((item) => {
            const {id} = item;
            const label = this.props.children(item);

            return (
                <li className={`list-group-item ${id == selectedItem ? "active":""}`}
                    key={id}
                    onClick={this.props.onItemSelected?.(id)}>{label}</li>
            )
        })
    };

    render(){
        const {data : itemList} = this.props;

        return(
            <ul className="item-list list-group">
                {this.renderItems(itemList)}
            </ul>
        )
    }
};*/

const ItemList = ({data: items, selectedItem, onItemSelected, children}) => {
        return(
            <ul className="item-list list-group">
                {items.map((item) => {
                    const {id} = item;
                    const label = children(item);

                    return (
                        <li className={`list-group-item ${id == selectedItem ? "active":""}`}
                            key={id}
                            onClick={()=> onItemSelected?.(id)}>{label}</li>
                    )
                })}
            </ul>
        )
};

export default ItemList;

