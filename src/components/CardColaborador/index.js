import styled from "styled-components";

const ColaboradorContainer = styled.div`
    width: 280px;
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
const Colaborador = () =>{
    return(
        <ColaboradorContainer>
            <Cabecalho>
                <ImgProfile src='https://github.com/Nic0lasSouza.png' alt='Nicolas Souza foto de perfil'/>
            </Cabecalho>
            <Rodape>
                <Nome>Nicolas Souza</Nome>
                <Cargo>Aluno de Engenharia de Software</Cargo>

            </Rodape>
        </ColaboradorContainer>
    )
}
export default Colaborador;