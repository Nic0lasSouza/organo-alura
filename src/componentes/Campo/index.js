import styled from "styled-components";

const Container = styled.div`
    margin: 24px 0;
`;

export const Nome = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size:18px
    font-weight: 600;
`;

export const Input = styled.input`
    background-color: #FFFFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width:100%;
    height: 40px;
    border: none;
    font-size: 16px;
    box-sizing: border-box;
    padding:5px 24px;
`;
const Campo = ({type = 'text' , label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (
    <Container>
        <Nome>{label}</Nome>
        <Input type={type} value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </Container>
    )
}

export default Campo