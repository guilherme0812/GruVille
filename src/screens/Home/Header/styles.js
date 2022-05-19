import styled from "styled-components/native"
import { Text } from "../../../components"

export const Container = styled.View`
    width: 100%;
    height: 220px;
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
    color: ${({ theme }) => theme.colors.textContrast};
`

export const Subtitle = styled(Text)`
    color: ${({ theme }) => theme.colors.textContrast};
`

export const WeatherContainer = styled.View`
    margin-bottom: ${({ theme }) => theme.metrics.padding}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const WeatherImage = styled.Image`
    width: 20px;
    height: 20px;
    margin-right: 6px;
`

export const WeatherText = styled(Subtitle)``