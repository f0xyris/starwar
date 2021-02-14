import React, { Component } from 'react';

import {connect} from 'react-redux';
import { fetchFilms } from '../../actions';
import { withStarwarService } from '../hoc';
import { compose } from '../../utils';
import FilmsListItem from '../films-list-item';

import Spinner from '../spinner';

class FilmList extends Component {

    componentDidMount() {
        this.props.fetchFilms();
    }

    render() {
        const {filmsItem, loading} = this.props;
        if(loading) {
            return (
                <Spinner />
            )
        } else {
            return (
                <ul className="list-group">
                    {
                        filmsItem.map((item, idx) => {
                            return (
                                <FilmsListItem 
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

const mapStateToProps = ({filmsItem, loading}) => {
    return {
        filmsItem,
        loading
    }
}

const mapDispatchToProps = ((dispatch, {starwarService}) => {
    return {
        fetchFilms: fetchFilms(starwarService, dispatch)
    }
})

export default compose(withStarwarService(),connect(mapStateToProps, mapDispatchToProps))(FilmList);