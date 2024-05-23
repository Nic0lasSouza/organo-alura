import styled from "styled-components";
import FooterContent from "./footerContent";

const FooterBackground = styled.div`
    background-color: #6278F7;
`;


const Footer = () =>{
    return(
        <FooterBackground>
            <FooterContent/>
        </FooterBackground>
    )
}
export default Footer;