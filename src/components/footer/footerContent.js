import styled from "styled-components";

const FooterContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    background-image: url("/img/fundo.png");
    display:flex;
    height: 213px;
    width:100%;
    justify-content: center;

    h3{
        color: #FFFFFF;
        font-size:20px;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
        margin-top: 90px;
        margin-left: 10%;
    }
`;
const Icons = styled.div`
    display:flex;
    padding-top: 30px;
    margin-left:30px;
    img{
        width: 30px;
        padding: 60px;
    }
`;
const Logo = styled.div`
    justify-content: center;
    align-items: center;
    margin-top:75px;
    margin-left: 100px;
    img{
        width: 166px;
        height: 63px;
    }
`;
const FooterContent = ()=>{
    return(
        <FooterContainer>
                <Icons>
                    <a href="https://www.facebook.com/"><img src="/img/fb.png" alt=""/></a>
                    <a href="https://twitter.com/"><img src="/img/tw.png" alt=""/></a>
                    <a href="https://www.instagram.com/"><img src="/img/ig.png" alt=""/></a>
                </Icons>
                <Logo>
                    <a href="https://organo.com"><img src="/img/logo.png" alt="logo" className="logoImg" /></a>
                </Logo>
                <h3>Desenvolvido com o curso de React disponibilizado pela Alura</h3>
            </FooterContainer>
    )
}
export default FooterContent;