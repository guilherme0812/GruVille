import styled from "styled-components/native"
import BottomSheet from '@gorhom/bottom-sheet';

export const Container = styled(BottomSheet).attrs(({ theme }) => ({
    snapPoints: ["90%"],
    backgroundStyle: {
        backgroundColor: theme.colors.background,
    },
}))`
    padding: 0 ${({ theme }) => theme.metrics.padding}px;
`