import './Formulario.css'
import CampoTexto from './componentes/CampoTexto';


const formulario = () =>{

    return (
       <section>
        <form>
        <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
        </form>
       </section>
    )

}

export default Formulario