import styled from "styled-components"

const StyledButtom = styled.button`
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
const Botao = ({texto}) => {
    return (
    <StyledButtom>
        {texto}
    </StyledButtom>)
}

export default Botao