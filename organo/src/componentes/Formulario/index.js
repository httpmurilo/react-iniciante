import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'


const formulario = (props) =>{

   
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImage] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })


    }
    return (
       <section className="formulario">
        <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar card do colaborador</h2>
        <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite o seu nome"
            valor = {nome}
            aoAlterado={valor => setNome(valor)}/>
        <CampoTexto 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite o seu cargo"
            valor = {cargo}
            aoAlterado={valor => setCargo(valor)}/>
        <CampoTexto 
            obrigatorio={true} 
            label="Imagem" 
            placeholder="Digite o endereço da imagem"
            valor = {imagem}
            aoAlterado={valor => setImage(valor)}/>
        <ListaSuspensa 
            obrigatorio={true} 
            label="Time" 
            itens={times}
            valor = {time}
            aoAlterado={valor => setTime(valor)}/>
        <Botao>
            Criar Card
        </Botao>
        </form>
       </section>
    )

}

export default formulario