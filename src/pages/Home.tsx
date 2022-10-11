import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BannerError} from "../components/banners/BannerError";
import { ShowCard } from "../components/pokemon/ShowCard";
import { SERVER_STOP } from "../helpers/errorsMessages";
import { IPokemon } from "../interfaces/pokemon.interfaces";
import { fetchAllPokemons } from "../services/pokemon";

export const Home = (): JSX.Element => {
  const [pokemons, setpokemons] = useState<Array<IPokemon>>([]);
  const [errorMsg, setErrorMsg] = useState<string>("")

  useEffect(() => {
    fetchAllPokemons().then((data) => setpokemons(data)).catch(err=>setErrorMsg(SERVER_STOP))
  }, []);

  return (
    <div className="container m-5">
      <Link to="/add" className="p-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ajouter un pokémon
        </button>
      </Link>
      {errorMsg.length>0 ? <BannerError msg={errorMsg}/>: <ShowCard pokemons={pokemons} />}
    </div>
  );
};

export default Home;