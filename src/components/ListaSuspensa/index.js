import styled from "styled-components";

const Container = styled.div`
    
`;
const Itens = styled.select`
    background-color: #FFFFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width:100%;
    height: 80px;
    border: none;
    font-size: 16px;
    box-sizing: border-box;
    padding:24px;
`;
const Nome = styled.label`
    display: block;
    margin:bottom: 8px;
    font-size:18px
    font-weight: 600;
`;
const ListaSuspensa = (props) => {

    return(
        <Container>
            <Nome>{props.label}</Nome>
            <Itens onChange={evento =>props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value={""}></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </Itens>
        </Container>
    )
}

export default ListaSuspensa;