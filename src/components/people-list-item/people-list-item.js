import React from 'react'

import './people-list-item.css';


const PeopleListItem = ({item}) => {
    const { name, gender } = item;
    return ( 
      <>
        <i className={`fa fa-${gender} fa-cog`} aria-hidden="true"></i>
        <span className="people-list-item_name" >{name}</span>
      </>
    );
}
 
export default PeopleListItem;