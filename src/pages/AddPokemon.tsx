import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { BannerFormError } from "../components/banners/BannerFormError";
import { AddForm } from "../components/pokemon/AddForm";
import { IPokemon } from "../interfaces/pokemon.interfaces";
import { addPokemon } from "../services/pokemon";
import {useNavigate} from 'react-router-dom';

export const AddPokemon = (): JSX.Element => {

  const navigator = useNavigate();
    
  const [pokemon, setPokemon] = useState<IPokemon>({
    name: "",
    description: "",
    imageUrl: "",
    size: 0,
    weight: 0,
    type: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange:
    | (ChangeEventHandler<HTMLTextAreaElement> &
        ChangeEventHandler<HTMLInputElement>)
 = (event) => {
    const target = event.target as HTMLTextAreaElement;
    console.log(target.name, "name")
    setErrorMsg("")
    setPokemon({ ...pokemon, [target.name]: target.value });
  };

  const backToHome = ():void=>{
    navigator('/')
    window.location.reload()
  }

   const submit:FormEventHandler<HTMLFormElement> = async (e)=>{
    e.preventDefault()
    if(isNaN(pokemon.size) || isNaN(pokemon.weight)){
        setErrorMsg("Taille et Poids doivent être des nombres!")
        return 
    }
    const response = await addPokemon(pokemon)
    response.status === 201 ? backToHome() : setErrorMsg("Erreur lors de l'enregistrement ")
   
   }


  return (
    <>
      <AddForm handleChange={handleChange} submit={submit}/>
      {errorMsg.length !== 0 && <BannerFormError  msg={errorMsg}/>}
    </>
  );
};

export default AddPokemon;