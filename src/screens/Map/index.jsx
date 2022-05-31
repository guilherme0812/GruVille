import React from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, Dimensions } from "react-native"
import MapView from 'react-native-maps'
import Header from "./Header"

const {width, height} = Dimensions.get('screen')

export default function Map({ navigation }) {
    return (
        <View>
            <Header />
            <MapView style={{width: width, height: height}}/>
        </View>
    )
}