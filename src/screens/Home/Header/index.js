import React from "react"
import { SearchBar } from "../../../components"

import { Container, Subtitle, Title } from "./styles"

export default function Header() {
    return (
        <Container>
            <Subtitle>Bom dia!</Subtitle>
            <Title>Onde iremos hoje?</Title>
            <SearchBar placeholder="Procure por categoria, cidade, etc." />
        </Container>
    )
}