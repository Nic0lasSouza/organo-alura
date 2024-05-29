import styled from 'styled-components'

const Footer =styled.footer`
    background: #6278F7;
    color: #FFF;
    padding: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul li {
    display: inline-block;
    margin-right: 32px;
    }

    ul li:last-child {
    margin-right: 0;
    }
`;

const Rodape = () => {
    return (
    <Footer>
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src="/img/fb.png" alt="" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src="/img/tw.png" alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src="/img/ig.png" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/img/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Alura.
        </p>
       </section>
    </Footer>
    )
}

export default Rodape