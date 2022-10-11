import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShowCard } from "../components/pokemon/ShowCard";
import { IPokemon } from "../interfaces/pokemon.interfaces";
import { fetchAllPokemons } from "../services/pokemon";

export const Home = (): JSX.Element => {
  const [pokemons, setpokemons] = useState<Array<IPokemon>>([]);

  useEffect(() => {
    fetchAllPokemons().then((data) => setpokemons(data));
  }, []);

  return (
    <div className="container m-5">
      <Link to="/add" className="p-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ajouter un pokémon
        </button>
      </Link>
      <ShowCard pokemons={pokemons} />
    </div>
  );
};

export default Home;