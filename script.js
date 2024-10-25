// import {Pokemon} from "./model.js";
import data from "./data.json" assert { type: 'json'}


class Pokemon {
    constructor(id, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns, spawn_time, multipliers, weaknesses, prev_evolution = null, next_evolution = null) {
        this.id = id
        this.name = name
        this.img = img
        this.type = type
        this.height = height
        this.weight = weight
        this.candy = candy
        this.candy_count = candy_count
        this.egg = egg
        this.spawn_chance = spawn_chance
        this.avg_spawns = avg_spawns
        this.spawn_time = spawn_time
        this.multipliers = multipliers
        this.weaknesses = weaknesses
        this.prev_evolution = prev_evolution
        this.next_evolution = next_evolution
    }
}

const formattedUrl = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`;

// const handleFetch = async (url) => {
//     const api = await fetch(url);
//     data = await api.json()
//     return await data
// };

// const fetchExec = async () => {
//     const rawData = await handleFetch(formattedUrl)
//     return rawData
// }


// function extractPrevEvolution(arr) {
//     let prev_evolution= []
//     if (arr !== null) {
//         for (const element in arr) {
//             prev_evolution.push(arr[element])
            
//         }
//     } else {
//         prev_evolution = arr
//     }
//     return prev_evolution
// }

// function extractNextEvolution(arr) {
//     let next_evolution= []
//     if (arr !== null) {
//         for (const element in arr) {
//             next_evolution.push(arr[element])
//         }
//     } else {
//         next_evolution = arr
//     }
//     return next_evolution
// }


let pokemonArray = []



for (let i = 0; i<data['pokemon'].length; i++) {

    // let prev_evolution = extractPrevEvolution(data['pokemon'][i]['prev_evolution'])
    // let next_evolution = extractNextEvolution(data['pokemon'][i]['next_evolution'])


    // how to associate a new Pokemon to a dynamic variable name?
    const newPokemon = new Pokemon (
        data['pokemon'][i]['id'], 
        data['pokemon'][i]['name'], 
        data['pokemon'][i]['img'], 
        data['pokemon'][i]['type'], 
        data['pokemon'][i]['height'], 
        data['pokemon'][i]['weight'].split(' ')[0], 
        data['pokemon'][i]['candy'], 
        data['pokemon'][i]['candy_count'], 
        data['pokemon'][i]['egg'],
        data['pokemon'][i]['spawn_chance'],
        data['pokemon'][i]['avg_spawns'],
        data['pokemon'][i]['spawn_time'],
        data['pokemon'][i]['multipliers'],
        data['pokemon'][i]['weaknesses'],
        data['pokemon'][i]['prev_evolution'],
        data['pokemon'][i]['next_evolution'])
    pokemonArray.push(newPokemon)
}   


// how many pokemon?
function countPoke(arr) {
    return arr.length
}
const pokeNumber = countPoke(pokemonArray)
console.log(`there are ${pokeNumber} pokemons!`);


// weight > 10kg?
function filterWeight(arr) {
    const pokeNames = []

    const filteredArr =  arr.filter(pokemon => pokemon.weight > 10)
    
    filteredArr.forEach(pokemon => {
        pokeNames.push(pokemon['name'])
    });
    return pokeNames
}
const fattyPokes = filterWeight(pokemonArray)
console.log(`there are ${fattyPokes.length} fatty pokemons!`);
// console.log(`the fat ones: ${fattyPokes}`);


// sort by weight
function filterByWeight(arr) {
    let sortedArr = arr
    sortedArr.sort(function (a, b) {
        return a.weight - b.weight;
      });
    return sortedArr
}
const filteredByWeight = filterByWeight(pokemonArray)
// console.log(filteredByWeight);