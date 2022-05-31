import { SearchBar } from "../../../components"

import { Container } from "./styles"

export default function Header() {
    return (
        <Container>
            <SearchBar placeholder="Busque...." />
        </Container>
    )
}