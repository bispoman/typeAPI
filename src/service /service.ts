import axios from 'axios';
import Character from '../model/character';
import Planet from '../model/planet';
import Starship from '../model/starship';

export function validateReturns(num) {
    if (num != null) {
        var parsedInt = Number(num);
        if (!isNaN(parsedInt)) {
            return true;
        }
    }
    return false;
}

export function getCharacters(num) {
var charNumber = Number(num);
axios.get("https://swapi.co/api/people/" + charNumber)
.then(function (response){
    console.log(response);
    let charObj = {
        name: response.data.get("name"),
        height: response.data.get("name"),
        mass: response.data.get("mass"),
        hair_color: response.data.get("hair_color"),
        skin_color: response.data.get("skin_color"),
        eye_color: response.data.get("eye_ color"),
        gender: response.data.get("gender"),
        homeworld: response.data.get("homeworld")
    } as Character;
    return charObj;
})
.catch(function (response) {
    console.log(response);
})
}

export function getPlanet(num) {
    var planetNumber = Number(num);
    axios.get("https://swapi.co/api/planets/"+ planetNumber)
    .then(function (response) {
        console.log(response);
        let planetObj = {
            name: response.data.get("name"),
            climate: response.data.get("climate"),
            terrain: response.data.get("terrain"),
            population: response.data.get("population")
        }as Planet;
        return planetObj;
    })
    .catch(function (response) {
        console.log(response);
    })
}

export function getStarship(num) {
    var shipNumber = Number(num);
    axios.get("https://swapi.co/api/starships/" + shipNumber)
    .then(function (response) {
        console.log(response);
        let shipObj = {
            name: response.data.get("name"),
            model: response.data.get("model"),
            lenght: response.data.get("lenght"),
            crew: response.data.get("crew"),
            starship_class: response.data.get("starship_class");
        } as Starship
    })
    .catch(function (response) {
        console.log(response);
    })
}