import styled from "styled-components/native"

export const Container = styled.ScrollView.attrs(({ theme, isEmpty }) => ({
    contentContainerStyle: {
        paddingTop: theme.metrics.headerHeight + theme.metrics.padding,
        paddingBottom: theme.metrics.padding,
        flex: isEmpty ? 1 : 0
    }
}))`
    flex: 1;
    width: 100%;
`