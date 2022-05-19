import React from "react"
import { SearchBar, Text } from "../../../components"

import { Container, Subtitle, Title, WeatherContainer, WeatherImage, WeatherText } from "./styles"

export default function Header() {
    return (
        <Container>
            <Subtitle>Bom dia!</Subtitle>
            <Title>Onde iremos hoje?</Title>
            <WeatherContainer>
                <WeatherImage source={{ uri: "https://cdn-icons-png.flaticon.com/512/869/869869.png" }} />
                <WeatherText>29º</WeatherText>
            </WeatherContainer>
            <SearchBar placeholder="Procure por categoria, cidade, etc." />
        </Container>
    )
}