import styled from "styled-components";
import Colaborador from "../CardColaborador";
// import Colaborador from "../CardColaborador";

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
const Colaboradores = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
`;
const Time = (props)=> {
    const corDeFundo = { backgroundColor: props.corSecundaria};
    const linhaBottom = {borderColor: props.corPrimaria};
    return(
        <TimeContainer style={corDeFundo}>
            <h3 style={linhaBottom}>{props.nome}</h3>
            <Colaboradores>
                {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </Colaboradores>
        </TimeContainer>
    )
}
export default Time;