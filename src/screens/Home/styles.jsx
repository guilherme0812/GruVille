import styled from "styled-components/native"

export const Container = styled.ScrollView.attrs(({ theme }) => ({
    contentContainerStyle: {
        paddingTop: theme.metrics.headerHeight,
        paddingBottom: theme.metrics.padding
    }
}))`
    flex: 1;
    width: 100%;
`