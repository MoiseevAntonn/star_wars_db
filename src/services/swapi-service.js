//удобно делать парсеры в классе-получателе данных
//логично выносить екстрактинг ид в отдельный общий метод

class SwapiService {

    _apiBase = "https://swapi.dev/api";
  
    async getResource(url){
      const response = await fetch(`${this._apiBase}${url}`);
  
      if (!response.ok){
        throw new Error("Ошибка запроса");
      };
  
      return await response.json();
    }
  
    getAllPeople = async () => {
      const body = await this.getResource(`/people/`); 
      const persons = body.results || [];
  
      return persons.map(person => this._transformPerson(person));
    }
  
    getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}/`);

      return this._transformPerson(person);
    }
  
    getAllPlanets = async () => {
      const body = await this.getResource(`/planets/`);
      const planets = body.results || [];
  
      return planets.map(planet => this._transformPlanet(planet));
    }
  
    getPlanet = async (id) => {
      const planet = await this.getResource(`/planets/${id}/`);

      return this._transformPlanet(planet);
    }
  
    getAllStarships = async () => {
      const body = await this.getResource(`/starships/`);
      const starships = body.results || [];

      return starships.map(starship => this._transformSpaceship(starship));
    }
  
    getStarship = async (id) => {
      const starship = await this.getResource(`/starships/${id}/`);

      return this._transformSpaceship(starship);
    }

    _extractId(item){
      const idRegExp = /\/([0-9])*\/$/; 
      return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet){
      return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
    }

    _transformSpaceship(spaceship){
      return {
        id: this._extractId(spaceship),
        name: spaceship.name,
        model: spaceship.model,
        manufacturer: spaceship.manufacturer,
        costInCredits: spaceship.costInCredits,
        length: spaceship.length,
        crew: spaceship.crew,
        passengers: spaceship.passengers,
        cargoCapacity: spaceship.cargoCapacity
      }
    }

    _transformPerson(person){
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
      }
    }
  };

  export default SwapiService;