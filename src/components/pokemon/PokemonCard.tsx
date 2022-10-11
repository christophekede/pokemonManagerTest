import { IPokemon } from "../../interfaces/pokemon.interfaces"


type PokemonCardProps = { pokemon: IPokemon }; /* could also use interface */
const i18nType = {"electricity": "électricité", "fire": "feu", "ice": "glace", "wind": "vent"}

const PokemonCard = ({ pokemon }: PokemonCardProps): JSX.Element => {
  const { name, description, imageUrl, size, weight, type } = pokemon;

  return (
    <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg object-contain h-48 w-full"
        src={imageUrl}
        alt=""
      />

      <div className="p-2">
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 ">
          {description}
        </p>

        <div>
          <p className=" text-sm font-medium float-left">
            {" "}
            <span>Taille : </span>
            {size}
            <span>&nbsp;cm</span>
          </p>
          <p className=" px-4 text-sm font-medium float-right">
            <span>Poids : </span>
            {weight}
            <span>&nbsp;kg</span>
          </p>

          <p className=" text-sm font-medium clear-right">
            <span>Type : </span>
            {i18nType[type]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard