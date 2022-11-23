import "./navbar.css";
import Button from "../../pages/PokemonDetails/components/button";
import { useState, useEffect } from "react";


export default function Navbar(props){

    const [ info, setInfo] = useState([])

    useEffect(() =>{
    
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response)=>{
            return response.json()
        })
        .then((info)=>{
            setInfo(info.results)
        })
    },[])


    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

    //   const str = pokemon.name;


    return(

        <>
      
            <aside className="navbar">

                <h1>Pokédex</h1>



              <ul>
           
              {info.map((pokemon) => (

         
            <li><a href={`/${pokemon.name}`}> { capitalizeFirst(pokemon.name)} </a> </li>

            ))}


            </ul>

<Button texto="Ver más"></Button>

            </aside>

    
        </>

    )

}