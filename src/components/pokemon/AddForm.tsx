import { ChangeEventHandler, FormEventHandler } from "react";
import { Link } from "react-router-dom";
import { IPokemon } from "../../interfaces/pokemon.interfaces";

type AddPokemonProps = { submit:FormEventHandler<HTMLFormElement> , handleChange:ChangeEventHandler<HTMLInputElement> & ChangeEventHandler<HTMLTextAreaElement> | undefined}

export const AddForm = ({submit, handleChange}:AddPokemonProps)=>{

    return (
      <form className="m-40" onSubmit={submit}>
        <Link to="/">
          <p className="mb-5 text-xl  tracking-tight text-gray-900 dark:text-white float-right">
            Home
          </p>
        </Link>
        <p className="mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Nouveau Pokémon
        </p>
        <div className="grid gap-6 mb-6 md:grid-cols-3 ">
          <div className="1">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nom
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description..."
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <div>
              <label
                htmlFor="imageUrl"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Image
              </label>
              <input
                type="text"
                name="imageUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3  md:grid-cols-2">
              <div className="">
                <label
                  htmlFor="size"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Taille (cm)
                </label>
                <input
                  type="text"
                  name="size"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label
                  htmlFor="weight"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Poids (kg)
                </label>
                <input
                  type="text"
                  name="weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <ul className="flex mb-5">
            <li>
              <input
                type="radio"
                id="fire"
                name="type"
                value="fire"
                className="hidden peer "
                required
                onChange={handleChange}
              />
              <label
                htmlFor="fire"
                className="inline-flex justify-between items-center p-5  text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Feu
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="ice"
                name="type"
                value="ice"
                className="hidden peer"
                onChange={handleChange}
              />
              <label
                htmlFor="ice"
                className="inline-flex justify-between items-center p-5 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Glace
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="electricity"
                name="type"
                value="electricity"
                className="hidden peer"
                onChange={handleChange}
              />
              <label
                htmlFor="electricity"
                className="inline-flex justify-between items-center p-5 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Electricite
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="wind"
                name="type"
                value="wind"
                className="hidden peer"
                onChange={handleChange}
              />
              <label
                htmlFor="wind"
                className="inline-flex justify-between items-center p-5 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Vent
              </label>
            </li>
          </ul>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enregistrer
        </button>
      </form>
    );
    
}