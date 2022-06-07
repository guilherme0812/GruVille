import { BackdropComponent, Container } from "./styles"
import { BottomSheetView } from "@gorhom/bottom-sheet"

export default function BottomSheet({ visible, children, ...props }) {
    return (
        <Container
            index={visible ? 0 : -1}
            enablePanDownToClose={true}
            backdropComponent={(props) => <BackdropComponent enableTouchThrough={true} {...props} />}
            {...props}
        >
            <BottomSheetView style={{ flex: 1 }}>
                {children}
            </BottomSheetView>
        </Container>
    )
}