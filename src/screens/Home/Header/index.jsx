import { SearchBar, Text } from "../../../components"

import { Container, Subtitle, Title, WeatherContainer, WeatherImage, WeatherText } from "./styles"

export default function Header({ weather }) {
    return (
        <Container>
            <Subtitle>Bom dia!</Subtitle>
            <Title>Onde iremos hoje?</Title>
            <WeatherContainer>
                <WeatherImage source={{ uri: weather && "https:" + weather.current.condition.icon }} />
                <WeatherText>{weather && weather.current.temp_c + "º"}</WeatherText>
            </WeatherContainer>
            <SearchBar placeholder="Procure por categoria, cidade, etc." />
        </Container>
    )
}