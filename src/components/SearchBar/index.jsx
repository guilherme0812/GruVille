import { Container, InputIcon, TextInput } from "./styles"

export default function SearchBar(props) {
    return (
        <Container>
            <InputIcon name="search" />
            <TextInput returnKeyType="search" {...props} />
        </Container>
    )
}