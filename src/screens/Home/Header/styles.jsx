import styled from "styled-components/native"
import { Text } from "../../../components"
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
    width: 100%;
    height: ${({ theme }) => theme.metrics.headerHeight}px;
    padding: ${({ theme }) => theme.metrics.padding}px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    border-bottom-left-radius: ${({ theme }) => theme.metrics.padding}px;
    border-bottom-right-radius: ${({ theme }) => theme.metrics.padding}px;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 99;
`

export const Content = styled(Animated.View)`
    width: 100%;
    align-items: flex-start;
    justify-content: flex-end;
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