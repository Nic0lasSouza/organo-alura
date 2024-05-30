import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'

const TimeContainer = styled.section`
    text-align: center;
    padding: 32px;
    background-blend-mode: multiply;
    position:relative;
`;

const NomeTime = styled.h3`
    font-size: 32px;
    font-family: 'Prata';
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
`;

const ColaboradorStyle = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
`;
const InputCor = styled.input`
    position:absolute;
    top:20px;
    right:50px;
`
const Time = ({ time, colaboradores, aoDeletar, mudarCor}) => {
    return (

        colaboradores.length > 0 && <TimeContainer style={{ backgroundImage: 'url(/img/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6')}}>
        <InputCor type='color' value={time.cor} onChange={evento => mudarCor(evento.target.value, time.nome)}/>
            <NomeTime style={{ borderColor: time.cor }}>{time.nome}</NomeTime>
            <ColaboradorStyle>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar} />)}
            </ColaboradorStyle>
        </TimeContainer>

    )
}

export default Time