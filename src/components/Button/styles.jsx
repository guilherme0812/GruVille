import styled from "styled-components/native"
import Text from "../Text"

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.metrics.padding}px;
    background-color: ${({ type, theme }) => type === "secondary" ? theme.colors.secondary : theme.colors.primary};
`

export const Title = styled(Text)`
    font-family: "bold";
    color: ${({ type, theme }) => type === "secondary" ? theme.colors.secondaryContrast : theme.colors.textContrast};
`