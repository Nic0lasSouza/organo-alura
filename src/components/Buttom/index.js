import styled from "styled-components";

const BotaoStyle = styled.button`
    background-color:#6278F7;
    border-radius: 10px;
    font-weight:700;
    font-size:18px;
    padding: 32px;
    border:none;
    cursor:pointer;
    color:#FFF;
    margin: 32px 0;

    &:hover{
        color:#95FFD4;
    }
`;
const Botao = (props)=> {
    return(
        <BotaoStyle>
            { props.texto}
        </BotaoStyle>
    )
}

export default Botao