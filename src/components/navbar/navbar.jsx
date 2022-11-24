import "./navbar.css";
import Button from "../../pages/PokemonDetails/components/button";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {

    const [info, setInfo] = useState([])

    const [verPokemon, setVerPokemon] = useState(20);

    var Url = `https://pokeapi.co/api/v2/pokemon?limit=${verPokemon}`


    useEffect(() => {

        fetch(Url)
            .then((response) => {
                return response.json()
            })
            .then((info) => {
                setInfo(info.results)
            })
    }, [Url])
    // se actualiza cuando la Url cambia al darle a ver más pokemons


    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };





    return (

        <>


            <aside className="navbar">

                <Link to="/"><h1>Pokédex</h1></Link>



                <ul className="pokemon_list">

                    {info.map((pokemon) => (


                        <li><Link to={`/${pokemon.name}`}> {capitalizeFirst(pokemon.name)} </Link> </li>

                    ))}


                </ul>

                <Button clase="button_shiny" funcion={()=> setVerPokemon(verPokemon + 10)} texto="Ver más"></Button>


            </aside>


        </>

    )

}