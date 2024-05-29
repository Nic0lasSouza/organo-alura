import styled from 'styled-components'

const BannerImg = styled.img`
    background-color:#6278F7;
    align-items: center;
    max-width: 100%;
`;
const Banner = () => {
    return (
    <header>
        <BannerImg src='/img/banner.png' alt='Logo do Organo'/>
    </header>)
}

export default Banner