import { useEffect } from "react";
import { useState } from "react";
import { SignOutButton } from '../components/Buttons/SignOutButton';

import './PokemonList.css';

const PokemonList = () => {

    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        const getPokemones = async () => {
            // Obtenemos el listado de pokemones
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
            const listaPokemones = await response.json()
            const { results } = listaPokemones;

            const newPokemones = results.map(async (pokemon) => {
                const response = await fetch(pokemon.url)
                const poke = await response.json()

                return {
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other.dream_world.front_default
                }
            })

            setPokemones(await Promise.all(newPokemones));
        }
        getPokemones()
    }, []);

    return (
        <div className="pokemons-container">
            <div className="exit-button">
                <SignOutButton>
                </SignOutButton>
            </div>
            <h1>POKEMONES</h1>

            {
                pokemones.map(pokemon => {
                    return (
                        <div className="list-pokemons">
                            <img src={pokemon.img} alt={pokemon.name} ></img>
                            <p>Name: {pokemon.name}</p>
                            <span>Id: {pokemon.id}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PokemonList;