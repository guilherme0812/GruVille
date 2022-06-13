import Icon from "../Icon"
import { ClearButton, ClearButtonIcon, Container, InputIcon, TextInput } from "./styles"

export default function SearchBar(props) {
    return (
        <Container>
            <InputIcon name="search" />
            <TextInput returnKeyType="search" {...props} />
            {
                props.value != "" &&
                <ClearButton onPress={props.onClear}>
                    <ClearButtonIcon name="x" />
                </ClearButton>
            }
        </Container>
    )
}