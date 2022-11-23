import "./button.css"

export default function button(props){
    return(
        <>
        
        <button className="button_shiny" onClick={props.funcion}> {props.texto} </button>

        
        </>
    )
}