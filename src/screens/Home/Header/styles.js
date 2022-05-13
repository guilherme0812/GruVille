import styled from "styled-components/native"
import { Text } from "../../../components"

export const Container = styled.View`
    width: 100%;
    height: 180px;
    padding: ${({ theme }) => theme.metrics.padding}px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    border-radius: ${({ theme }) => theme.metrics.padding}px;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const Title = styled(Text)`
    font-family: "bold";
    font-size: 24px;
    color: ${({theme}) => theme.colors.textContrast};
`

export const Subtitle = styled(Text)`
    color: ${({theme}) => theme.colors.textContrast};
`