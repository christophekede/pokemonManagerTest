import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonCard from '../../components/pokemon/PokemonCard';
import { IPokemon } from '../../interfaces/pokemon.interfaces';
import { i18nType } from '../../helpers/i18n';


describe('PokemonCard', () => {
    
    let pika:IPokemon = {
        "name": "Pikachu",
        "description": "Plus la puissance électrique de Pikachu est élevée, plus les poches de ses joues sont extensibles.",
        "imageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        "size": 40,
        "weight": 6,
        "type": "electricity"
      }

    test('Should render without crash', async () => {
        render(<PokemonCard pokemon={pika} />)
    })

    test('Should render pikachu details', async () => {
        render(<PokemonCard pokemon={pika} />)
        const name = screen.getByRole("heading", {level:5}) 
        const img = screen.getByRole("img") as HTMLImageElement
        const desc = screen.getByText(pika.description)
        const size = screen.getByText(pika.size)
        const type = screen.getByText(i18nType[pika.type])
        const weight = screen.getByText(pika.weight)
       
       


        expect(img.src).toBe(pika.imageUrl)
        expect(name.textContent).toBe(pika.name)
        expect(desc).toBeInTheDocument()
        expect(size).toBeInTheDocument()
        expect(type).toBeInTheDocument()
        expect(weight).toBeInTheDocument()

            
    })
})
