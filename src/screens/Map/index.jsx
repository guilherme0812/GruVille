import React, { useState } from "react"
import { View, Text, Dimensions } from "react-native"
import Header from "./Header"
import Marker from "./Marker";

import { MapContainer } from "./styles"

const { width, height } = Dimensions.get('screen')

export default function Map({ navigation, ...props }) {
    const [region, setRegion] = useState({
        latitude: -26.3051,
        longitude: -48.8461,
        latitudeDelta: 0.095,
        longitudeDelta: 0.095,
    })

    return (
        <View>
            <Header />
            <MapContainer
                initialRegion={{
                    latitude: -26.3051,
                    longitude: -48.8461,
                    latitudeDelta: 0.095,
                    longitudeDelta: 0.095,
                }}
            >
                <Marker
                    title="Evento teste de estátuas de Lego"
                    description="Primeiro evento municipal de competição de estatuas de Lego"
                    coordinate={{ latitude: -26.3051, longitude: -48.8461 }}
                    image={{ uri: 'https://trovesaurus.com/data/catalog/c_m_pinata_ui.png' }}
                />
            </MapContainer>
        </View>
    )
}