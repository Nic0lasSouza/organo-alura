import styled from "styled-components";
import CampoTexto from "../CampoText/index"

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
                <h2>Preencha os dados parar criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
            </Form>
        </SectionContainer>
    )
}
export default Formulario;