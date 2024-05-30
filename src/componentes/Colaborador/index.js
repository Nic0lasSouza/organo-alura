import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

const ContainerColaborador = styled.div`
    position: relative;
    width: 280px;
`;
const CabecalhoColaborador = styled.div`
    background-color:  #F0F0F0;
    border-radius: 10px 10px 0px 0px;
`;
const ImgColaborador =styled.img`
    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;
`;
const RodapeColaborador =styled.div`
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;
`;
const NomeColaborador = styled.h4`
    color: #6278F7;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const CargoColaborador = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 0 16px;
`;
const BotaoFechar = styled.div`
    position: absolute;
    right: -10px;
    top: -10px;
    cursor:pointer;
`;
const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (
    <ContainerColaborador>
        <BotaoFechar>
        <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
        </BotaoFechar>
        <CabecalhoColaborador style={{ backgroundColor: corDeFundo }}>
            <ImgColaborador src={colaborador.imagem} alt={colaborador.nome} />
        </CabecalhoColaborador>
        <RodapeColaborador>
            <NomeColaborador>{colaborador.nome}</NomeColaborador>
            <CargoColaborador>{colaborador.cargo}</CargoColaborador>
        </RodapeColaborador>
    </ContainerColaborador>
    )
}

export default Colaborador