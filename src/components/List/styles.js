import styled from "styled-components/native"
import Text from "../Text"

export const Container = styled.View`
    height: 420px;
`

export const Header = styled.View`
    padding-left: ${({ theme }) => theme.metrics.padding}px;
    margin-bottom: ${({ theme }) => theme.metrics.padding}px;
`

export const Tilte = styled(Text)`
    font-family: "bold";
    font-size: 24px;
`

export const FlatList = styled.FlatList.attrs(({ theme }) => ({
    contentContainerStyle: { paddingLeft: theme.metrics.padding, paddingRight: theme.metrics.padding }
}))``

export const ListSeparator = styled.View`
    width: ${({ theme }) => theme.metrics.padding}px;
`