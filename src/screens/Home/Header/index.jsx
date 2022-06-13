import { useEffect, useState } from "react"
import { SearchBar } from "../../../components"
import { useTheme } from "styled-components"
import moment from "moment"
import { getCurrentWeather } from "../../../services/climaTempoAPI"


import { Container, Content, Subtitle, Title, WeatherContainer, WeatherImage, WeatherText } from "./styles"

export default function Header({ animatedRef, searchbar }) {
    const [weather, setWeather] = useState()
    const [timeStatus, setTimeStatus] = useState()
    const theme = useTheme()
    const headerHeightInterpolate = animatedRef.interpolate({
        inputRange: [0, theme.metrics.headerHeight],
        outputRange: [theme.metrics.headerHeight, 120],
        extrapolate: "clamp"
    })
    const headerOpacityInterpolate = animatedRef.interpolate({
        inputRange: [0, theme.metrics.headerHeight],
        outputRange: [1, 0],
        extrapolate: "clamp"
    })

    useEffect(() => {
        const hour = moment(new Date()).format("h")
        const ampm = moment(new Date()).format("A")

        if (hour >= 12 && hour <= 11 && ampm === "AM") {
            setTimeStatus("Bom dia!")
        } else if (hour >= 6 && hour <= 11 && ampm === "PM") {
            setTimeStatus("Boa noite!")
        } else {
            setTimeStatus("Boa tarde!")
        }

        async function getWeather() {
            await getCurrentWeather().then((res) => {
                setWeather(res.data)
            })
        }
        getWeather()
    }, [])

    useEffect(() => {

    }, [])

    return (
        <Container style={{ height: headerHeightInterpolate }}>
            <Content style={{ opacity: headerOpacityInterpolate }}>
                <Subtitle>{timeStatus}</Subtitle>
                <Title>Onde iremos hoje?</Title>
                <WeatherContainer>
                    <WeatherImage source={{ uri: weather && "https:" + weather.current.condition.icon }} />
                    <WeatherText>{weather && weather.current.temp_c + "º"}</WeatherText>
                </WeatherContainer>
            </Content>
            <SearchBar placeholder="Procure por categoria, cidade, etc." {...searchbar} />
        </Container>
    )
}