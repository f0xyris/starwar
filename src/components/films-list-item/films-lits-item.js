import React from 'react'

const FilmListItem = ({item, idx}) => {
    return ( 
      <li key={idx} className="list-group-item" >{item.title}</li>
    );
}
 
export default FilmListItem;