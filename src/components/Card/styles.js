import styled from "styled-components/native"
import Icon from "../Icon"
import Text from "../Text"

export const Container = styled.View.attrs(({ theme }) => ({
    elevation: theme.metrics.padding
}))`
    width: 250px;
    height: 340px;
    padding: ${({ theme }) => theme.metrics.padding}px;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${({ theme }) => theme.metrics.padding}px;
    background-color: ${({ theme }) => theme.colors.card};
`

export const Header = styled.View`
    width: 250px;
    height: 150px;
    border-top-left-radius: ${({ theme }) => theme.metrics.padding}px;
    border-top-right-radius: ${({ theme }) => theme.metrics.padding}px;
`

export const Image = styled.Image`
    width: 100%;
    height: 120px;
    border-top-left-radius: ${({ theme }) => theme.metrics.padding}px;
    border-top-right-radius: ${({ theme }) => theme.metrics.padding}px;
`

export const DateContainer = styled.View.attrs(({ theme }) => ({
    elevation: theme.metrics.padding
}))`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 90px;
    left: ${({ theme }) => theme.metrics.padding}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.metrics.padding}px;
    background-color: ${({ theme }) => theme.colors.card};
`

export const DayText = styled(Text)`
    font-family: "semiBold";
    color: ${({ theme }) => theme.colors.primary};
`

export const MonthText = styled(Text).attrs(() => ({
    numberOfLines: 1,
    ellipsizeMode: "tail",
    maxLenght: 3
}))`
    text-transform: capitalize;
`

export const Content = styled.View`
    width: 100%;
`

export const Head = styled.View`
    margin-bottom: ${({ theme }) => theme.metrics.padding}px;
`

export const Title = styled(Text)`
    font-family: "semiBold";
`

export const SubTitle = styled(Text)`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textAlt};
`

export const OtherInfoContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const OtherInfoIcon = styled(Icon)`
    font-size: 14px;
    margin-right: 6px;
    color: ${({ theme }) => theme.colors.textAlt};
`

export const OtherInfoText = styled(Text)`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textAlt};
`