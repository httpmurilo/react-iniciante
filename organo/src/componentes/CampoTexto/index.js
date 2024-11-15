import './CampoTexto.css'


const CampoTexto = (props) => {

    //let valor = ''

    //hook -> vai fazer alguma coisa
    //const [valor, setValor] =  useState('')


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio}  placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto