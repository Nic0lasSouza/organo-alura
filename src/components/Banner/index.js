import styled from "styled-components";

const BannerImg = styled.img`
    background-color:#6278F7;
    align-items: center;
    max-width: 100%;
`;

function Banner(){
    return(
        <header>
            <BannerImg src="/img/banner.png" alt="banner da pagina principal"/>
        </header>
    )
}
export default Banner