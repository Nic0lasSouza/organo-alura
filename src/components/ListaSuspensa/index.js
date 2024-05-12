import styled from "styled-components";

const Container = styled.div``;

const ListaSuspensa = (props) => {
    return(
        <Container>
            <label>{props.label}</label>
            <select>
                <option>
                    {props.itens.map(item => {
                        return <option>{item}</option>
                    })}
                </option>
            </select>
        </Container>
    )
}

export default ListaSuspensa;