import { useState } from "react"
import { View, Text } from "react-native"
import Header from "./Header"
import Marker from "./Marker"
import { BottomSheet } from "../../components"

import { MapContainer } from "./styles"

export default function Map({ navigation, ...props }) {
    const [bottomSheet, setBottomSheet] = useState({ visible: false, data: {} })
    const [region, setRegion] = useState({
        latitude: -26.3051,
        longitude: -48.8461,
        latitudeDelta: 0.095,
        longitudeDelta: 0.095,
    })

    const data = [
        {
            cover: { uri: "https://files.nsctotal.com.br/s3fs-public/graphql-upload-files/festival-danca-joinville_3.jpg?_r.2Hx3E4zg9IeReCRCe_MyBJs3osjzD" },
            title: "Festival de Dança 2022",
            local: "Centreventos Cau Hansen",
            address: "Av. José Vieira, 315 - América",
            date: new Date("2022/07/19"),
            startTime: "20:00",
            endTime: "22:00",
            description: "Uma breve descrição do evento clicado anteriormente pelo usuário.",
            cordinate: { latitude: -26.3051, longitude: -48.8461 },
            category: "música"
        },
        {
            cover: { uri: "https://cafeviagem.com/wp-content/uploads/2019/05/vinicolas-em-Santa-Catarina-d3.jpg" },
            title: "Degustação de vinhos",
            local: "Vinícola D'alture",
            address: "Rodovia SC 114",
            date: new Date("2022/07/20"),
            startTime: "07:30",
            endTime: "09:00",
            description: "Uma breve descrição do evento clicado anteriormente pelo usuário.",
            cordinate: { latitude: -26.2900, longitude: -48.8200 },
            category: "cinema"
        }
    ]

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
                <Text>{bottomSheet.data.title}</Text>
            </BottomSheet>
        </View>
    )
}