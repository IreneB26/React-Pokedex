import "./404.css"

import img from "./img/404P.png"
import Button from "../../pages/PokemonDetails/components/button";
import { Link } from "react-router-dom";


export default function Error404() {
    return (
        <>


        <img src={img} /> 
    

       <Button clase="button_404" texto="Volver al inicio">    </Button>


        </>
    )
}