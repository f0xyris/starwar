import React, { Component } from 'react'

import {connect} from 'react-redux';
import {onInputChange} from '../../actions';

class FilterItem extends Component {
    
    render() {
        const {onInputChange} = this.props;
        return (
            <div className="d-flex flex-grow-1">
                <input className="flex-grow-1 searchField" onChange = {(e) => onInputChange(e.target.value)} type="text" placeholder="Try to search any hero..."/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (value) => dispatch(onInputChange(value))
    }
}


export default connect(null, mapDispatchToProps)(FilterItem);