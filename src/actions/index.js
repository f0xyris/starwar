 

const fetchData = () => {
  return {
    type: 'FETCH_PEOPLE_REQUEST'
  }
}

const peopleLoaded = (newPeople) => {
  return {
    type: 'FETCH_PEOPLE_SUCCESS',
    payload: newPeople
  };
};

const peopleError = (error) => {
  return {
    type: 'FETCH_PEOPLE_FAILURE',
    payload: error
  };
};

const filmsLoaded = (newFilms) => {
  return {
    type: 'FETCH_FILMS_SUCCESS',
    payload: newFilms
  };
};

const filmsError = (error) => {
  return {
    type: 'FETCH_FILMS_FAILURE',
    payload: error
  };
};

const starshipsLoaded = (newStarships) => {
  return {
    type: 'FETCH_STARSHIPS_SUCCESS',
    payload: newStarships
  };
};

const starshipsError = (error) => {
  return {
    type: 'FETCH_STARSHIPS_FAILURE',
    payload: error
  };
};

const speciesLoaded = (newSpecies) => {
  return {
    type: 'FETCH_SPECIES_SUCCESS',
    payload: newSpecies
  };
};

const speciesError = (error) => {
  return {
    type: 'FETCH_SPECIES_FAILURE',
    payload: error
  };
};

const onItemSelected = (itemId) => {
  return {
    type: 'ON_ITEM_SELECTED',
    payload: itemId

  }
};

const onInputChange = (value) => {
  return {
    type: 'ON_INPUT_CHANGE',
    payload: value
  }
}

const onIncreaseCount = () => {
  return {
    type: 'ON_INCREASE_COUNT'
  }
}

const onAddToFavorite = () => {
  return {
    type: 'ON_ADD_TO_FAVORITE'
  }
}

const onRemoveFromFavorite = () => {
  return {
    type: 'ON_REMOVE_FROM_FAVORITE'
  }
}

const fetchPeople = (starwarService, dispatch) => () => {
  dispatch(fetchData());
  starwarService.getAllPeopleData()
  .then((data) => dispatch(peopleLoaded(data)))
  .catch((err) => dispatch(peopleError(err)))
};

const fetchFilms = (starwarService, dispatch) => () => {
  dispatch(fetchData());
  starwarService.getAllFilmsData()
    .then((data) => dispatch(filmsLoaded(data)))
    .catch((err) => dispatch(filmsError(err)));
};

const fetchStarships = (starwarService, dispatch) => () => {
  dispatch(fetchData());
  starwarService.getAllStarshipsData()
    .then((data) => dispatch(starshipsLoaded(data)))
    .catch((err) => dispatch(starshipsError(err)));
};

const fetchSpecies = (starwarService, dispatch) => () => {
  dispatch(fetchData());
  starwarService.getAllSpeciesData()
    .then((data) => dispatch(speciesLoaded(data)))
    .catch((err) => dispatch(speciesError(err)));
};

export {
  fetchPeople,
  onItemSelected,
  fetchFilms,
  fetchStarships,
  fetchSpecies,
  onInputChange,
  onIncreaseCount,
  onAddToFavorite,
  onRemoveFromFavorite
}