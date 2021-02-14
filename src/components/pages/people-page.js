import React, { Component } from 'react';
import {connect} from 'react-redux';

import PeopleList from '../people-list';
import FilterItem from '../filter-item';

import './page.css';

class PeoplePage extends Component {
    render() {

       
        return (
            <div className="container-fluid flex-grow-1 page">
                <div className="container default-page">
                    <FilterItem />
                    <PeopleList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({loading}) => {
    return {
        loading
    }
}

export default connect(mapStateToProps)(PeoplePage);



