import React, { Component } from 'react'
import PeopleListItem from '../people-list-item';

import { connect } from 'react-redux';

import { fetchPeople, onItemSelected, onIncreaseCount} from '../../actions';
import { withStarwarService } from '../hoc';
import { compose } from '../../utils';
import {Link} from 'react-router-dom';

import Spinner from '../spinner';

import './people-list.css';

const PeopleList = ({onItemSelected, filteredProducts, onIncreaseCount, loading}) => {

    if(loading) {
        return (
            <Spinner />
        )
    } else {
        return ( 
            <div className="">
                <ul className="people-list list-group">
                    {
                        filteredProducts && filteredProducts.map((item, idx) => {
                            return (
                                <Link to = "/details" onClick = {() => onItemSelected(item.id)} className="list-group-item" key = {idx} >
                                    <PeopleListItem 
                                        item = {item}
                                    />
                                </Link>
                            )
                        })
                    }
                </ul>
                <div className="pagination">
                    <button className="btn btn-secondary" onClick = {() => onIncreaseCount()}>More people</button>
                </div>
            </div>
        );
    }
};

class PeopleListContainer extends Component {

    componentDidMount() {
        this.props.fetchPeople();
    }
  
    render() {
      const { onItemSelected, onIncreaseCount, filteredProducts, loading } = this.props;
  
      return <PeopleList onItemSelected = {onItemSelected} onIncreaseCount = {onIncreaseCount} filteredProducts = {filteredProducts} loading = {loading}/>;
    }
};

const mapStateToProps = ({filteredProducts, loading }) => {
    return { filteredProducts, loading };
};

const mapDispatchToProps = (dispatch, { starwarService }) => {

    return {
      fetchPeople: fetchPeople(starwarService, dispatch),
      onItemSelected: (id) => dispatch(onItemSelected(id)),
      onIncreaseCount: () => dispatch(onIncreaseCount())
    };
};
 
export default compose(withStarwarService(),connect(mapStateToProps, mapDispatchToProps))(PeopleListContainer);