import { SearchBar } from "../../../components"

import { Container } from "./styles"

export default function Header({ searchbar }) {
    return (
        <Container>
            <SearchBar placeholder="Procure por categoria, cidade, etc." {...searchbar} />
        </Container>
    )
}