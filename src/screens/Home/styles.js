import styled from "styled-components/native"

export const Container = styled.ScrollView.attrs(({ theme }) => ({
    contentContainerStyle: { paddingTop: theme.metrics.padding, paddingBottom: theme.metrics.padding }
}))`
    flex: 1;
    width: 100%;
`

export const ListSeparator = styled.View`
    width: ${({ theme }) => theme.metrics.padding}px;
`

export const ListTitle = styled.Text``