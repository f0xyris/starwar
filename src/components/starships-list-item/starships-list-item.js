import React from 'react'

const StarshipsListItem = ({item, idx}) => {
    return ( 
        <li key={idx} className="list-group-item">{item.model}</li>
    );
}
 
export default StarshipsListItem;