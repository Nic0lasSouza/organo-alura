import styled from "styled-components";

const TimeContainer = styled.section`
    text-align:center;
    padding: 32px;


    h3{
        font-size: 32px;
        border-bottom: 4px solid;
        display: inline-block;
        padding-bottom: 8px;
    }
`;

const Time = (props)=> {
    const corDeFundo = { backgroundColor: props.corSecundaria};
    const linhaBottom = {borderColor: props.corPrimaria};
    return(
        <TimeContainer style={corDeFundo}>
            <h3 style={linhaBottom}>{props.nome}</h3>
        </TimeContainer>
    )
}
export default Time;