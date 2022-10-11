import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { BannerError } from "../components/banners/BannerError";
import { AddForm } from "../components/pokemon/AddForm";
import { IPokemon } from "../interfaces/pokemon.interfaces";
import { addPokemon } from "../services/pokemon";
import {useNavigate} from 'react-router-dom';
import { SERVER_STOP } from "../helpers/errorsMessages";

export const AddPokemon = (): JSX.Element => {

  const navigator = useNavigate();
    
  const [pokemon, setPokemon] = useState<IPokemon>({
    id:Math.floor(Math.random() * 500),
    name: "",
    description: "",
    imageUrl: "",
    size: 0,
    weight: 0,
    type: "electricity",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange:
    | (ChangeEventHandler<HTMLTextAreaElement> &
        ChangeEventHandler<HTMLInputElement>)
 = (event) => {
    const target = event.target as HTMLTextAreaElement;
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
    try {
        const response = await addPokemon(pokemon)
        response.status === 201 ? backToHome() : setErrorMsg("Erreur lors de l'enregistrement ")
    } catch (error) {
        setErrorMsg(SERVER_STOP)
    }
  
   
   }


  return (
    <>
      <AddForm handleChange={handleChange} submit={submit}/>
      {errorMsg.length !== 0 && <BannerError  msg={errorMsg}/>}
    </>
  );
};

export default AddPokemon;