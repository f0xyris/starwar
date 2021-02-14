import React, { Component } from 'react';

import {connect} from 'react-redux';
import { fetchSpecies } from '../../actions';
import { withStarwarService } from '../hoc';
import { compose } from '../../utils';
import SpeciesListItem from '../species-list-item';
import Spinner from '../spinner';

class SpeciesList extends Component {

    componentDidMount() {
        this.props.fetchSpecies();
    }

    render() {
        const {speciesItem, loading} = this.props;
        if(loading) {
            return (
                <Spinner />
            )
        } else {
            return (
                <ul className="list-group">
                    {
                        speciesItem.map((item, idx) => {
                            return (
                                <SpeciesListItem 
                                    item = {item}
                                    idx = {idx}
                                />
                            )
                        })
                    }
                </ul>
            )
        }
    }
}

const mapStateToProps = ({speciesItem, loading}) => {
    return {
        speciesItem,
        loading
    }
}

const mapDispatchToProps = ((dispatch, {starwarService}) => {
    return {
        fetchSpecies: fetchSpecies(starwarService, dispatch)
    }
})

export default compose(withStarwarService(),connect(mapStateToProps, mapDispatchToProps))(SpeciesList);