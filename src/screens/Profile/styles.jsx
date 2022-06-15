import styled from "styled-components/native"
import { Icon, Text } from "../../components"

export const Container = styled.View`
    flex:1;
    width: 100%;
    padding: ${({ theme }) => theme.metrics.padding}px;
`

export const Header = styled.View`
    width: 100%;
    height: 250px;
`

export const ProfilePic = styled.View`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 150px;
    left: ${({ theme }) => theme.metrics.padding}px;
    border-radius: 50px;
`

export const UserTitle = styled(Text)`
    font-family: "bold";
    font-size: 18px;
    position: absolute;
    top: 216px;
    left: 140px;
`

export const Item = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    padding: 0 ${({ theme }) => theme.metrics.padding}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: ${({ theme }) => theme.metrics.padding}px;
    background-color: ${({ theme }) => theme.colors.secondary};
`

export const ItemText = styled(Text)`
    color: ${({ theme }) => theme.colors.secondaryContrast};
`

export const ItemIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.secondaryContrast};
`