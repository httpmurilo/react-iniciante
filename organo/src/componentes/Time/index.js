import './Time.css'

//nao tem comportamento
//dumb  component
//so recebe o nome do time

const css = {backgroundColor: props.corSecundario}


const Time = (props) => {
    return (
        <section className='time' style={css}>
            <h3 style={{borderColor:props.corPrimaria }}>{props.nome}</h3>
        </section>
    )

}

export default Time