import styled from "styled-components/native"

export const Container = styled.View`
    width: 100%;
    height: 100px;
    padding: 0 ${({ theme }) => theme.metrics.padding}px;
    position: absolute;
    top: 0;
    align-items: center;
    justify-content: flex-end;
    background-color: transparent;
    z-index: 1;
`