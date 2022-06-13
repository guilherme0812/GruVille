import styled from "styled-components/native"
import BottomSheet, { BottomSheetBackdrop, BottomSheetHandle } from '@gorhom/bottom-sheet';

export const Container = styled(BottomSheet).attrs((props) => ({
    snapPoints: props.snapPoints ?? ["90%"],
    backgroundStyle: {
        backgroundColor: props.theme.colors.background,
    },
    containerStyle: {
        position: "relative",
        zIndex: 99
    },
}))`
    padding: 0 ${({ theme }) => theme.metrics.padding}px;
`

export const BackdropComponent = styled(BottomSheetBackdrop)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
`

export const HandleContainer = styled.View`
    width: 100%;
    height: 30px;
    align-items: center;
    justify-content: center;
`
export const HandleComponent = styled.View`
    width: 40px;
    height: 4px;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.secondary};
`