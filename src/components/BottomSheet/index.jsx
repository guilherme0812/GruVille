import { BottomSheetView } from "@gorhom/bottom-sheet"

import { BackdropComponent, Container, HandleComponent, HandleContainer } from "./styles"

export default function BottomSheet({ visible, children, ...props }) {
    return (
        <Container
            index={visible ? 0 : -1}
            enablePanDownToClose={true}
            backdropComponent={(props) => <BackdropComponent enableTouchThrough={true} {...props} />}
            handleComponent={() =>
                <HandleContainer>
                    <HandleComponent />
                </HandleContainer>
            }
            {...props}
        >
            <BottomSheetView style={{ flex: 1 }}>
                {children}
            </BottomSheetView>
        </Container>
    )
}