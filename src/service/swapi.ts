import axios, { AxiosAdapter, AxiosResponse } from 'axios';

export async function getCharacters(num):Promise<any> {
    var charNumber = Number(num);
    let response: any;

    try {
        response = await axios.get("https://swapi.co/api/people" + charNumber)
    } catch (error) {
        const errozinho = new Error('defaultError');
        errozinho.message = error.body;
        throw errozinho;
    }

    return {
        name: response.data.name,
        height: response.data.height,
        mass: response.data.mass,
        hair_color: response.data.hair_color,
        skin_color: response.data.skin_color,
        eye_color: response.data.eye_color,
        gender: response.data.gender,
        homeworld: response.data.homeworld
    }
}

export function getPlanet(num) {
    var planetNumber = Number(num);
    let response: any;

    try {
        axios.get("https://swapi.co/api/planets/"+ planetNumber)
        .then( this.response = response );
    } catch(error) {
        const errozinho = new Error('defaultError');
        errozinho.message = error.body;
        throw errozinho;
    }

    return {
        name: response.data.name,
        climate: response.data.climate,
        terrain: response.data.terrain,
        population: response.data.population
    }
}

export function getStarship(num) {
    var shipNumber = Number(num);
    let response: any;
    
    try{
        axios.get("https://swapi.co/api/starships/" + shipNumber)
        .then( this.response = response );
    } catch(error) {
        const errozinho = new Error('defaultError');
        errozinho.message = error.body;
        throw errozinho;
    }

    return {
        name: response.data.name,
        model: response.data.model,
        lenght: response.data.lenght,
        crew: response.data.crew,
        starship_class: response.data.starship_class
    }
}