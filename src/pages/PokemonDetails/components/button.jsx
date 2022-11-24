import "./button.css"

export default function button(props){
    return(
        <>
        
        <button className={props.clase} onClick={props.funcion}> {props.texto} </button>

        
        </>
    )
}