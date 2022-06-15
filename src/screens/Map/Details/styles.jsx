import styled from "styled-components/native"
import { Text, Icon, Button } from "../../../components"

export const Container = styled.View`
    flex: 1;
    width: 100%;
    padding-bottom: ${({ theme }) => theme.metrics.padding}px;
    justify-content: space-between;
`

export const Header = styled.View`
    width: 100%;
    height: 20%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const Image = styled.Image`
    width: 100px;
    height: 100px;
    margin-right: ${({ theme }) => theme.metrics.padding}px;
    border-radius: ${({ theme }) => theme.metrics.padding}px;
`

export const Title = styled(Text)`
    width: 64%;
    font-family: "bold";
`

export const Subtitle = styled(Text)`
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
    width: 60%;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textAlt};
`


export const SecondaryButton = styled(Button)`
    margin-bottom: ${({ theme }) => theme.metrics.padding}px;
`