import styled from "styled-components";

const Nome = styled.label`
    display: block;
    margin:bottom: 8px;
    font-size:18px
    font-weight: 600;
`;
const Input = styled.input`
    background-color: #FFFFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width:100%;
    height: 80px;
    border: none;
    font-size: 16px;
    box-sizing: border-box;
`;
const Container =styled.div`
    margin: 24px 0;
`;
const CampoTexto = (props) =>{
    return(
        <Container>
            <Nome>{props.label}</Nome>
            <Input placeholder={props.placeholder}/>
        </Container>
    )
}

export default CampoTexto;