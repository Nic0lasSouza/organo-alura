import { useState } from 'react'
import styled from 'styled-components';
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

const FormularioContainer= styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0;
`;
const FormularioStyle = styled.form`
    max-width: 80%;
    background: #F7F7F7;
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    padding: 36px 64px;
`;
const Titulo = styled.h2`
    font-weight: 400;
    font-size: 32px;
`;
const Formulario = ({aoCadastrar, times}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, cargo, imagem, time )
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <FormularioContainer>
            <FormularioStyle onSubmit={aoSubmeter}>
                <Titulo>Preencha os dados para criar o card do colaborador.</Titulo>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar card' />
            </FormularioStyle>
        </FormularioContainer>
    )
}

export default Formulario