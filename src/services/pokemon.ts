import { IPokemon } from "../interfaces/pokemon.interfaces"


const API_POKEMON_URL = "http://localhost:3001/pokemons"

export const  fetchAllPokemons = async ():Promise<Array<IPokemon>>=>{
    const response = await fetch(API_POKEMON_URL, {method: 'GET'})
    const data = await response.json()
    return data

}

export const  addPokemon = async (pokemon: IPokemon):Promise<any> => {
   const response = await fetch(API_POKEMON_URL, {
     method: 'POST', body: JSON.stringify(pokemon),
     headers: {
       "Content-Type": "application/json",
     },
   })
   return response
}
