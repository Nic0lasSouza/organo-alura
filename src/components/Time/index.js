import styled from "styled-components";
import Colaborador from "../CardColaborador";
// import Colaborador from "../CardColaborador";

const TimeContainer = styled.section`
    text-align:center;
    padding: 32px;
    position:relative;
    background-image: url("/img/fundo.png");


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
const InputCor = styled.input`
    position: absolute;
    top: 20px;
    right:50px;
`;
const Time = (props, {aoDeletar, mudarCor})=> {
    const corDeFundo = { backgroundColor: props.corSecundaria};
    const linhaBottom = {borderColor: props.corPrimaria};
    return(
        (props.colaboradores.length > 0) ? <TimeContainer style={corDeFundo}>
            <InputCor type="color" value={props.cor} onChange={evento => mudarCor(evento.target.value, props.nome)} />
            <h3 style={linhaBottom}>{props.nome}</h3>
            <Colaboradores>
                {props.colaboradores.map(colaborador => {
                    return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={aoDeletar}/>
                })}
            </Colaboradores>
        </TimeContainer>
        :''
    )
}
export default Time;