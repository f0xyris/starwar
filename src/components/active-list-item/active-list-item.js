import React from 'react'

const ActiveListItem = ({item, value,idx}) => {
    return ( 
        <li key = {idx} className="list-group-item">{item}<span>{value}</span></li>
    );
}
 
export default ActiveListItem;