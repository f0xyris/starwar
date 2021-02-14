import React from 'react'

const SpeciesListItem = ({item, idx}) => {
    return ( 
        <li key={idx} className="list-group-item">{item.name}</li>
    );
}
 
export default SpeciesListItem;