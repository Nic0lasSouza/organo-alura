import styled from 'styled-components'
import Colaborador from '../Colaborador'

const TimeContainer = styled.section`
    text-align: center;
    padding: 32px;
    background-blend-mode: multiply;
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

const Time = ({ time, colaboradores, aoDeletar }) => {
    return (

        colaboradores.length > 0 && <TimeContainer style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <NomeTime style={{ borderColor: time.corSecundaria }}>{time.nome}</NomeTime>
            <ColaboradorStyle>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoDeletar={aoDeletar} />)}
            </ColaboradorStyle>
        </TimeContainer>

    )
}

export default Time