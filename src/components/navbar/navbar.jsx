import "./navbar.css";
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




    return(

        <>
      
            <aside className="navbar">

              <ul>
           
              {info.map((pokemon) => (

         
            <li><a href={`/${pokemon.name}`}> { pokemon.name} </a> </li>

            ))}


            </ul>
            </aside>

    
        </>

    )

}