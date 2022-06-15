import { useState, useEffect } from "react"
import Header from "./Header"
import Marker from "./Marker"
import { BottomSheet } from "../../components"
import Details from "./Details"
import { data } from '../../utils/data'
import moment from "moment"

import { MapContainer } from "./styles"

export default function Map() {
    const [bottomSheet, setBottomSheet] = useState({ visible: false, data: {} })
    const [searchText, setSearchText] = useState("")
    const [searchResult, setSearchResult] = useState(data)

    function search() {
        const result = data.filter(element =>
            element.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
            ||
            element.category.toLowerCase().indexOf(searchText.toLowerCase()) > -1
            ||
            element.city.toLowerCase().indexOf(searchText.toLowerCase()) > -1
            ||
            element.local.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )

        setSearchResult(result)
    }

    useEffect(() => {
        search()
    }, [searchText])

    return (
        <>
            <Header
                searchbar={{
                    value: searchText,
                    onChangeText: setSearchText,
                    onSubmitEditing: () => search(),
                    onClear: () => setSearchText("")
                }}
            />
            <MapContainer
                initialRegion={{
                    latitude: -26.3051,
                    longitude: -48.8461,
                    latitudeDelta: 0.14,
                    longitudeDelta: 0.14,
                }}
            >
                {
                    searchResult.map((item, index) => (
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
                snapPoints={["22%", "94%"]}
            >
                <Details data={bottomSheet.data} />
            </BottomSheet>
        </>
    )
}