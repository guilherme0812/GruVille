import styled from "styled-components/native"
import { Button, Text } from "../../../components"

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
`

export const Image = styled.Image`
    width: 100%;
    height: 200px;
    margin-bottom: ${({ theme }) => theme.metrics.padding}px;
    border-radius: ${({ theme }) => theme.metrics.padding}px;
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled(Text)`
    font-family: "bold";
    font-size: 24px;
`

export const Subtitle = styled(Text)`
    font-family: "semiBold";
    color: ${({ theme }) => theme.colors.textAlt};
`

export const SecondaryButton = styled(Button)`
    margin-bottom: ${({ theme }) => theme.metrics.padding}px;
`

