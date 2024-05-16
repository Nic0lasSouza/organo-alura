import styled from "styled-components";

const TimeContainer = styled.section`
    text-align:center;
    padding: 32px;
    background-color: #D9F7E9;

    h3{
        font-size: 32px;
        border-bottom: 4px solid #57C278;
        display: inline-block;
        padding-bottom: 8px;
    }
`;
const Time = (props)=> {
    return(
        <TimeContainer>
            <h3>{props.nome}</h3>
        </TimeContainer>
    )
}
export default Time;