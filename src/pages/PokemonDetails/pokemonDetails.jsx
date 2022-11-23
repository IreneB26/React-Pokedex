import "./pokemonDetails.css"
import Button from "./components/button";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PokemonDetails() {

    const pokename = useParams();



    const url = `https://pokeapi.co/api/v2/pokemon/${pokename.name}`;


    const [shiny, setShiny] = useState(false)


    // guardar variables y modo cargando 

    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState(null);
    const [imageUrlS, setImageUrlS] = useState(null);

    // --------------------------------------



    const [pokemon, setPokemon] = useState([])

    useEffect(() => {

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((pokemon) => {
                setPokemon(pokemon)
                console.log(pokemon)

                // guardo en variables la infromación que necesito para que cuando este cargada el loading se ponga false

                setImageUrl(pokemon.sprites.front_default); // ⬅️ Guardar datos
                setImageUrlS(pokemon.sprites.front_shiny); // ⬅️ Guardar datos
                setIsLoading(false); // ⬅️ Desactivar modo "cargando"

                // -------------------------------------------------------------------
            })
    }, [])


    // poner mayuscula la primera letra

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const str = pokemon.name;

    //   ------------------------------------


    // loader mientras carga la imagen 


    if (isLoading) {
        return (
            <>
                <div class="lds-ripple"><div></div><div></div></div>
            </>

        )
    }

    // -------------------------------

    return (
        <>

            <section>



                <img className="img_pokemon" src={shiny === true ? `${imageUrlS}` : `${imageUrl}`} />

                <article className="name_section">

                    <h2>{capitalizeFirst(str)}</h2>

                </article>


                <section className="type_section">

                    <h2>Types</h2>

                    <article className="types">

                        {pokemon.types.map((types) => (


                            <span>{types.type.name} &nbsp;</span>



                        ))}
                    </article>

                </section>


                <section className="abilities_section">
                    <h2>Abilities</h2>
                    <article className="abilities">

                        {pokemon.abilities.map((abilities) => (
                            <span>{abilities.ability.name} &nbsp;</span>



                        ))}


                    </article>
                </section>




                <section className="stats_section">
                    <h2>Stats</h2>

                    <article className="stats">





                        {pokemon.stats.map((stats) => (

                            <p>{stats.stat.name}: {stats.base_stat}</p>



                        ))}

                    </article>

                </section>


                <article>
                    
                    <Button funcion={() => setShiny(!shiny)} texto={shiny === true ? 'ver normal' : "ver shiny"}></Button>


                </article>



            </section>






        </>
    )
}