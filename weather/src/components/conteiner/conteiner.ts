import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: ${props => props.itemProp || "row"};
    align-items: center;
    justify-content: center;
`