import React from 'react'

import FilmsList from '../films-list';
import SpeciesList from '../species-list';
import StarshipsList from '../starships-list';

const ActiveItem = ({itemId}) => {


    switch (itemId) {
        case 'films':
            return <FilmsList />
        case 'starships':
            return <StarshipsList />
        case 'species':
            return <SpeciesList />
        default:
            return false

    }
}
 
export default ActiveItem;