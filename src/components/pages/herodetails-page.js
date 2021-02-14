import React from 'react'

// import { withStarwarService } from '../hoc';
// import { compose } from '../../utils';

import ActiveList from '../active-list';
import ActiveItem from '../active-item';

import {Link, Route} from 'react-router-dom';

const HerodetailsPage = ({match}) => {
    return ( 
        <div className="container-fluid flex-grow-1 page">
            <div className="container default-page">
                
        
                <ActiveList />
                    
                <div className="btn-group" role="group">
                        <Link className = "btn btn-secondary" to={`${match.url}/films`}>Films</Link>
                        <Link className = "btn btn-secondary" to={`${match.url}/starships`}>Starships</Link>
                        <Link className = "btn btn-secondary" to={`${match.url}/species`}>Species</Link>
                </div>
                <Route 
                    path={`${match.url}/:id`}
                    render = {({match}) => {
                        const { id } = match.params;
                        return <ActiveItem itemId = {id}/>
                    }}
                />
            </div>
        </div>  
    );
   
}

export default HerodetailsPage;