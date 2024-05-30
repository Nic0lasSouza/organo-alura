import styled from 'styled-components'

const ListaContainer =styled.div`
    margin: 24px 0;
`;
const Time = styled.div`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`
const Opcoes = styled.select`
    background: #FFFFFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    border-radius: 0px;
    width: 100%;
    border: none;
    font-size: 18px;
    padding: 24px;
    box-sizing: border-box;
`;
const ListaSuspensa = ({label, items,  valor, aoAlterado, obrigatorio = false}) => {
    return (
    <ListaContainer>
        <Time>{label}</Time>
        <Opcoes required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </Opcoes>
    </ListaContainer>
    )
}

export default ListaSuspensa