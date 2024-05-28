import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";

const ColaboradorContainer = styled.div`
    width: 280px;
    position:relative;
`;
const Cabecalho = styled.div`
    background-color:  #F0F0F0;
    border-radius: 10px 10px 0px 0px;
`;
const ImgProfile = styled.img`
    width: 100px;
    border-radius:50%;
    position: relative;
    bottom: -50px;
`;
const Rodape = styled.div`
    background-color: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;
`;
const Nome = styled.h4`
    color: #6278F7;
    font-size:18px;
    line-height:22px;
    font-weight: bold;
    margin-bottom: 8px;
`;
const Cargo = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 16px;
`;

const Deletarstyle = styled.div`
    position: absolute;
    cursor: pointer;
    right:-10px;
    top: -10px;
`;
const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar}) =>{
    return(
        <ColaboradorContainer>
            <Deletarstyle onClick={aoDeletar}><IoMdCloseCircle size={26}/></Deletarstyle>
            <Cabecalho style={{backgroundColor: corDeFundo}}>
                <ImgProfile src={imagem} alt={nome}/>
            </Cabecalho>
            <Rodape>
                <Nome>{nome}</Nome>
                <Cargo>{cargo}</Cargo>
            </Rodape>
        </ColaboradorContainer>
    )
}
export default Colaborador;