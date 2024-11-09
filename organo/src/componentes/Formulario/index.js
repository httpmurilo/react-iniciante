import './Formulario.css'
import CampoTexto from './componentes/CampoTexto';


const formulario = () =>{

    return (
       <section className="formulario">
        <form>
        <h2>Preencha os dados para criar card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
        </form>
       </section>
    )

}

export default Formulario