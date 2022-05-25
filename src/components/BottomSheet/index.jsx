import { Container } from "./styles"
import { BottomSheetView } from "@gorhom/bottom-sheet"

export default function BottomSheet({ visible, children, ...props }) {
    return (
        <Container
            index={visible ? 0 : -1}
            enablePanDownToClose={true}
            {...props}
        >
            <BottomSheetView style={{ flex: 1 }}>
                {children}
            </BottomSheetView>
        </Container>
    )
}