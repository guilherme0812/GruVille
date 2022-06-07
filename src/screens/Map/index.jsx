import React from "react"
import { View, Text, Dimensions } from "react-native"
import Header from "./Header"

import { MapContainer } from "./styles"

const { width, height } = Dimensions.get('screen')

export default function Map({ navigation, ...props }) {
    const initial = {
        longitude: -48.8461,
        latitude: -26.3051,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
    }

    return (
        <View>
            <Header />
            <MapContainer region={initial} />
        </View>
    )
}