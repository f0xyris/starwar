import React, { Component } from 'react';
import {connect} from 'react-redux';


class FavoritePage extends Component {
    render() {
        const {favoriteItems} = this.props;;
        
        const favItems = favoriteItems.map((item) => {
            return (
                <li key={item.id} className="list-group-item">
                    <i className={`fa fa-${item.gender} fa-cog`} aria-hidden="true"></i>
                    <span className="people-list-item_name" >{item.name}</span>
                </li>
            )
        })
        return (
            <div className="container-fluid flex-grow-1 page favorite-page">
                <div className="container default-page">
                    <ul className="people-list list-group">
                        {favItems}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({favoriteItems}) => {
    return {
        favoriteItems
    }
}

export default connect(mapStateToProps)(FavoritePage);
