import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./searchbar.css"



export default function Searchbar() {

    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };




    const url = `https://pokeapi.co/api/v2/pokemon/${inputText}`;





    useEffect(() => {
    
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((pokemon) => {
            

                
                console.log(pokemon)
    
                
            })
    }, [url])


   

    



    return (
        <>

            <form class="search">
                <input className="search_bar"  onChange={inputHandler} type="text" placeholder="Search here..." required/>
                    <Link className="busqueda_button" to={`/${inputText}`}>Search</Link>
            </form>
        </>
    )
}