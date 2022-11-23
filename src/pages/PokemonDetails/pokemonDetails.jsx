import "./pokemonDetails.css"
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";

export default function PokemonDetails(){

    const pokename = useParams();



    const url = `https://pokeapi.co/api/v2/pokemon/${pokename.name}`;


    const [shiny, setShiny] = useState(false)

    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState(null);
    const [imageUrlS, setImageUrlS] = useState(null);



    const [ pokemon, setPokemon] = useState([])

    useEffect(() =>{
    
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((pokemon)=>{
            setPokemon(pokemon)
            console.log(pokemon)
            setImageUrl(pokemon.sprites.front_default); // ⬅️ Guardar datos
            setImageUrlS(pokemon.sprites.front_shiny); // ⬅️ Guardar datos
            setIsLoading(false); // ⬅️ Desactivar modo "cargando"
        })
    },[])


    if (isLoading) { return(
    <>
    <div class="lds-ripple"><div></div><div></div></div>
    </>
    
)
    }

    return(
        <>
      

        
        


    <button onClick={() => setShiny(!shiny)} > {shiny === true ? 'ver normal' : "ver shiny"}  </button>





    <img src= {shiny === true ? `${imageUrlS}` : `${imageUrl }`} /> 

        
    <p>{pokemon.name}</p>
    <p>{pokemon.weight}</p>






  




        
        
        </>
    )
}