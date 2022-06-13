import { useEffect, useState } from "react"
import Header from "./Header"
import Option from "./Option"
import { BottomSheet, Card, List } from "../../components"


import { Container } from "./styles"
import Details from "./Details"
import { data } from "../../utils/data"
import { categorys } from '../../utils/components'
import { useRef } from "react"
import { Animated } from "react-native"

export default function Home({ navigation }) {
    const scrollOffsetY = useRef(new Animated.Value(0)).current
    const [bottomSheet, setBottomSheet] = useState({ visible: false, data: {} })
    const [searchText, setSearchText] = useState("")
    const [searchResult, setSearchResult] = useState(data)

    function renderEventsItem({ item }) {
        return (
            <Card
                cover={item.cover}
                title={item.title}
                local={item.local}
                address={item.address}
                date={item.date}
                startTime={item.startTime}
                endTime={item.endTime}
                onPress={() => setBottomSheet({ ...bottomSheet, data: item, visible: true, })}
            />
        )
    }

    function renderCategorysItem({ item }) {
        return (
            <Option
                title={item.title}
                image={item.image}
            />
        )
    }

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

    return (
        <>
            <Header animatedRef={scrollOffsetY} searchbar={{
                value: searchText,
                onChangeText: setSearchText,
                onSubmitEditing: () => search()
            }} />
            <Container
                onScroll={
                    Animated.event(
                        [
                            { nativeEvent: { contentOffset: { y: scrollOffsetY } } },

                        ],
                        { useNativeDriver: false },
                    )
                }
                scrollEventThrottle={16}
            >
                <List
                    data={categorys}
                    renderItem={renderCategorysItem}
                    keyExtractor={(item, index) => index}
                    horizontal
                />

                <List
                    title="Nesta semana"
                    data={searchResult}
                    renderItem={renderEventsItem}
                    keyExtractor={(item, index) => index}
                    height="big"
                    horizontal
                />

                <List
                    title="Na próxima semana"
                    data={data}
                    renderItem={renderEventsItem}
                    keyExtractor={(item, index) => index}
                    height="big"
                    horizontal
                />

                <List
                    title="Mês que vem"
                    data={data}
                    renderItem={renderEventsItem}
                    keyExtractor={(item, index) => index}
                    height="big"
                    horizontal
                />
            </Container>

            <BottomSheet
                visible={bottomSheet.visible}
                onChange={() => setBottomSheet({ ...bottomSheet, visible: false })}
            >
                <Details data={bottomSheet.data} />
            </BottomSheet>
        </>
    )
}