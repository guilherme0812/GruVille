import React from "react"
import { View, Text, Dimensions } from "react-native"
import Header from "./Header"

import { MapContainer } from "./styles"

const {width, height} = Dimensions.get('screen')

export default function Map({ navigation, ...props }) {
    return (
        <View>
            <Header />
            <MapContainer />
        </View>
    )
}