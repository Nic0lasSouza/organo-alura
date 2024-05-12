import styled from "styled-components";
import CampoTexto from "../CampoText/index"
import ListaSuspensa from "../ListaSuspensa";
import { times } from "../ListaSuspensa/times";
import Botao from "../Buttom";

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
const Formulario = () => {
    return (
        <SectionContainer>
            <Form>
                <h2>Preencha os dados parar criar o card do colaborador(a)</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Times" itens={times}/>
                <Botao texto="Criar Card"/>
            </Form>
        </SectionContainer>
    )
}
export default Formulario;