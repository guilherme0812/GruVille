import { useState } from "react"
import { View, Text } from "react-native"
import Header from "./Header"
import Marker from "./Marker"
import { BottomSheet } from "../../components"
import Details from "./Details"
import {data} from '../../utils/data'

import { MapContainer } from "./styles"

export default function Map({ navigation, ...props }) {
    const [bottomSheet, setBottomSheet] = useState({ visible: false, data: {} })
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
                {
                    data.map((item, index) => (
                        <Marker
                            key={index}
                            title={item.title}
                            coordinate={item.cordinate}
                            category={item.category}
                            onPress={() => setBottomSheet({ ...bottomSheet, data: item, visible: true })}
                        />
                    ))
                }
            </MapContainer>

            <BottomSheet
                visible={bottomSheet.data != {} ? bottomSheet.visible : false}
                onChange={() => setBottomSheet({ ...bottomSheet, visible: false })}
                snapPoints={["20%", "90%"]}
            >
                <Details data={bottomSheet.data} />
            </BottomSheet>
        </View>
    )
}