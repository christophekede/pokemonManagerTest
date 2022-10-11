import { IPokemon } from "../../interfaces/pokemon.interfaces";
import PokemonCard from "./PokemonCard";

type ShowCardProps = { pokemons: IPokemon[] }; 

export const ShowCard = ({pokemons}:ShowCardProps):JSX.Element  =>{
  const mapPokemons = (pokemons: Array<IPokemon>) =>
    pokemons.map((pokemon: IPokemon) => (
      <PokemonCard key={pokemon.name} pokemon={pokemon} />
    ));

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-5">
      {mapPokemons(pokemons)}
    </div>
  );
}