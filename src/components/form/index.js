import styled from "styled-components";
import CampoTexto from "../CampoText/index"
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Buttom";
import { useState } from "react";

const SectionContainer = styled.section`
    display:flex;
    justify-content: center;
    margin: 80px 0;
`;
const Form = styled.form`
    max-width: 80%;
    background-color: #F2F2F2;
    border-radius: 20px;
    padding: 36px 64px;
    box-shadow:7px 7px 15px rgba(0, 0, 0, 0.08);
`;
const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Programação',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento)=>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }
    return (
        <SectionContainer>
            <Form onSubmit={aoSalvar}>
                <h2>Preencha os dados parar criar o card do colaborador(a)</h2>
                <CampoTexto
                obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto
                obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto
                label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa
                required={true} label="Times" itens={times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao texto="Criar Card"/>
            </Form>
        </SectionContainer>
    )
}
export default Formulario;