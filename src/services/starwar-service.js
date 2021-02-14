
export default class StarwarService {
    
    _apiBase = 'https://swapi.dev/api';
    
    _extractId = (item) => {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    };

    _transformPerson = (people) => {
      return {
        ...people,
        id: this._extractId(people)
      }
    }

    _transformStarship= (starship) => {
      return {
        ...starship,
        id: this._extractId(starship)
      }
    }

    getResource = async (urls) => {
      const results = [];
      let url = (`${this._apiBase}${urls}`);
      
      do {
          const res = await fetch(url);
          const data = await res.json();
          url = data.next;
          results.push(...data.results);
      } while ( url );

      return results;
    };

    getAllPeople = async () => {
      const res = await this.getResource(`/people/`);
      return res
      .map(this._transformPerson)
    };

    getAllPeopleData = async () => {
      const people = this.getAllPeople();
      return new Promise((resolve) => {
        resolve(people);
      });
      
    };

    getAllFilms = async () => {
      const res = await this.getResource(`/films/`);
      return res
    };

    getAllFilmsData = async () => {
      const films = this.getAllFilms();
      return new Promise((resolve) => {
        resolve(films);
      });
      
    };

    getAllStarships = async () => {
      const res = await this.getResource(`/starships/`);
      return res
        .map(this._transformStarship)
    };

    getAllStarshipsData = async () => {
      const starships = this.getAllStarships();
      return new Promise((resolve) => {
        resolve(starships)
      })
    };


    getAllSpecies = async () => {
      const res = await this.getResource(`/species/`);
      return res
    };

    getAllSpeciesData = async () => {
      const species = this.getAllSpecies();
      return new Promise((resolve) => {
        resolve(species)
      })
    };
  }