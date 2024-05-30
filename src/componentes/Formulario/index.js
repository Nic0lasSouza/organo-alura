import { useState } from 'react'
import styled from 'styled-components';
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'

const FormularioContainer= styled.section`
    display: flex;
    gap:20px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 80px 50px;
`;
const FormularioStyle = styled.form`
    flex:1;
    background: #F7F7F7;
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    padding: 36px 64px;
`;
const Titulo = styled.h2`
    font-weight: 400;
    font-size: 32px;
`;
const Formulario = ({aoCadastrar, times, cadastrarTime}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

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
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <Campo
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
            <FormularioStyle onSubmit={(evento) =>{
                evento.preventDefault()
                cadastrarTime({nome: nomeTime, cor: corTime})
            }
            }>
                <Titulo>Preencha os dados para criar um novo time.</Titulo>
                <Campo
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}/>
                <Campo
                    obrigatorio
                    type='color'
                    label='Cor'
                    placeholder='Digite a cor do time'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}/>
                <Botao texto='Criar um novo time' />
            </FormularioStyle>
        </FormularioContainer>
    )
}

export default Formulario