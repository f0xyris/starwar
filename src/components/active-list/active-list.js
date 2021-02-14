import React, { Component } from 'react';

import {connect} from 'react-redux';
import { withStarwarService } from '../hoc';
import { compose } from '../../utils';
import ActiveListItem from '../active-list-item';
import {onAddToFavorite, onRemoveFromFavorite} from '../../actions';

class ActiveList extends Component {

    render() {
        
        const {selectedItem, onAddToFavorite, favoriteItems, onRemoveFromFavorite} = this.props;
        const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender} = selectedItem;

        const favItemIndex = favoriteItems.findIndex(({id}) => id === selectedItem.id);
        const newItems = {
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender
        };
        const peopleItems = Object.entries(newItems).map(([item, value, idx]) => {
            item = item.charAt(0).toUpperCase() + item.slice(1);
            item = item.split('_').join(' ');
    
            if(value === "n/a" || value === "unknown") {
                value = "-"
            }
    
            return ( 
                <ActiveListItem 
                    item = {item}
                    value = {value}
                    idx = {idx}
                />
            )
        });

        return (
            <>  
                <div className="d-flex flex-grow-1 justify-content-between">
                     <h3 className="active-item__name">{name}</h3>
                    {
                        favItemIndex < 0
                        ? <button onClick = {() => onAddToFavorite()} className="btn btn-secondary">Add to favorite</button> 
                        : <button onClick = {() => onRemoveFromFavorite()} className="btn btn-danger">Remove item from favorite</button>
                    }
                </div>
               
                <ul className="list-group">
                    {peopleItems}
                </ul>
            </>
        )
    }
}

const mapStateToProps = ({selectedItem, favoriteItems}) => {
    return {
        selectedItem,
        favoriteItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToFavorite: () => dispatch(onAddToFavorite()),
        onRemoveFromFavorite: () => dispatch(onRemoveFromFavorite())
    }
}

export default compose(withStarwarService(),connect(mapStateToProps, mapDispatchToProps))(ActiveList);