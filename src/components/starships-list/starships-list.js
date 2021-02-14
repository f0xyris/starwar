import React, { Component } from 'react';

import {connect} from 'react-redux';
import { fetchStarships } from '../../actions';
import { withStarwarService } from '../hoc';
import { compose } from '../../utils';
import StarshipsListItem from '../starships-list-item';

import Spinner from '../spinner';

class StarshipsList extends Component {

    componentDidMount() {
        this.props.fetchStarships();
    }

    render() {
        const {starshipsItem, loading} = this.props;
        if(loading) {
            return (
                <Spinner />
            )
        } else {
            return (
                <ul className="list-group">
                    {
                        starshipsItem.map((item, idx) => {
                            return (
                                <StarshipsListItem 
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

const mapStateToProps = ({starshipsItem, loading}) => {
    return {
        starshipsItem,
        loading
    }
}

const mapDispatchToProps = ((dispatch, {starwarService}) => {
    return {
        fetchStarships: fetchStarships(starwarService, dispatch)
    }
})

export default compose(withStarwarService(),connect(mapStateToProps, mapDispatchToProps))(StarshipsList);