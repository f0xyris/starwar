const initialState = {
    people: [],
    loading: false,
    error: null,
    selectedItem: [],
    filmsItem: [],
    filmsItemId: [],
    starshipsItem: [],
    starshipsItemId: [],
    speciesItem: [],
    speciesItemId: [],
    filteredProducts: [],
    allPeople: [],
    favoriteItems: []
    
};

let peopleCount = 10;

const reducer = (state = initialState , action) => {
    console.log(action.type);
    switch (action.type) {
        case 'FETCH_PEOPLE_REQUEST':
            return {
                ...state,
                people: [],
                loading: true,
                error: null,
                
            };

        case 'FETCH_PEOPLE_SUCCESS':
            const allPeople = action.payload;
            const slicedPeople = allPeople.slice(0, peopleCount);
            return {
                ...state,
                people: slicedPeople,
                allPeople,
                filteredProducts: slicedPeople,
                loading: false,
                error: null
            };

        case 'FETCH_PEOPLE_FAILURE':
            return {
                ...state,
                people: [],
                loading: false,
                error: action.payload
            };

        case 'FETCH_FILMS_REQUEST':
            return {
                ...state,
                filmsItem: [],
                loading: true,
                error: null
            };

        case 'FETCH_FILMS_SUCCESS':
            const allFilms = action.payload;
            const selectedFilms = state.filmsItemId.map((itemIdx) => {
                return allFilms[itemIdx - 1]
            })
            
            return {
                ...state,
                filmsItem: selectedFilms,
                loading: false,
                error: null
            };

        case 'FETCH_FILMS_FAILURE':
            return {
                ...state,
                filmsItem: [],
                loading: false,
                error: action.payload
            };
        
        case 'FETCH_STARSHIPS_REQUEST':
            return {
                ...state,
                starshipsItem: [],
                loading: true,
                error: null,
                
            };

        case 'FETCH_STARSHIPS_SUCCESS':

            const allStarships = action.payload;

            const selectedStarships = allStarships.filter(item => state.starshipsItemId.indexOf(item.id) !== -1)
            
            return {
                ...state,
                starshipsItem: selectedStarships,
                loading: false,
                error: null
            };

        case 'FETCH_STARSHIPS_FAILURE':
            return {
                ...state,
                starshipsItem: [],
                loading: false,
                error: action.payload
            };

        case 'FETCH_SPECIES_REQUEST':
            return {
                ...state,
                speciesItem: [],
                loading: true,
                error: null,
                
            };

        case 'FETCH_SPECIES_SUCCESS':

            const allSpecies= action.payload;
            const selectedSpecies = state.allSpecies.map((itemIdx) => {
                return allSpecies[itemIdx - 1]
            })

            return {
                ...state,
                speciesItem: selectedSpecies,
                loading: false,
                error: null
            };

        case 'FETCH_SPECIES_FAILURE':
            return {
                ...state,
                speciesItem: [],
                loading: false,
                error: action.payload
            };
        
        case 'ON_ITEM_SELECTED':
            const itemId = action.payload;
            const item = state.people.find((item) => item.id === itemId);
            const {films, starships, species} = item;
            const idRegExp = /\/([0-9]*)\/$/;

            const filmsItemId = films.map((item) => {
                return item.match(idRegExp)[1];
            })

            const starshipsItemId = starships.map((item) => {
                return item.match(idRegExp)[1];
            })

            const speciesItemId = species.map((item) => {
                return item.match(idRegExp)[1];
            })

            return {
                ...state,
                selectedItem: item,
                filmsItemId,
                starshipsItemId,
                speciesItemId
            };

        
        case 'ON_INPUT_CHANGE':
            const searchValue = action.payload;
            let newState = Object.assign({}, state);
            const {people} = state;
            
            let filteredValue = people.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
            
            if (searchValue !== '') {
                newState.filteredProducts = filteredValue;
            } else {
                newState.filteredProducts = newState.people;
            }
            return newState;
        
        case 'ON_INCREASE_COUNT':
            peopleCount += 10;
            let newPeopleCount = Object.assign({}, state);
            newPeopleCount.filteredProducts = state.allPeople.slice(0, peopleCount);
            newPeopleCount.people = newPeopleCount.filteredProducts;
            return newPeopleCount;

        case 'ON_ADD_TO_FAVORITE':
            const {favoriteItems, selectedItem} = state;
            const addItemIndex = favoriteItems.findIndex(({id}) => id === selectedItem.id);
            
            if(addItemIndex < 0) {
                return {
                    ...state,
                    favoriteItems: [
                        ...favoriteItems,
                        selectedItem
                    ]
                }
            } else {
                return {
                    ...state,
                    favoriteItems: [
                        ...favoriteItems.slice(0, addItemIndex),
                        selectedItem,
                        ...favoriteItems.slice(addItemIndex + 1),
                    ]
                }
            }

        case 'ON_REMOVE_FROM_FAVORITE':
            const removeItemIndex = state.favoriteItems.findIndex(({id}) => id === state.selectedItem.id);
            
            if(removeItemIndex < 0) {
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                    favoriteItems: [
                        ...state.favoriteItems.slice(0, removeItemIndex),
                        ...state.favoriteItems.slice(removeItemIndex + 1)
                    ]
                }
            }

        default:
            return state;
    }
};

export default reducer;