import { useEffect, useState } from "react"
import Header from "./Header"
import Option from "./Option"
import { BottomSheet, Card, List, Text } from "../../components"

import Details from "./Details"
import { data } from "../../utils/data"
import { categories } from '../../utils/categories'
import { useRef } from "react"
import { Animated, View } from "react-native"
import moment from "moment"

import { Container } from "./styles"

export default function Home({ navigation }) {
    const scrollOffsetY = useRef(new Animated.Value(0)).current
    const [bottomSheet, setBottomSheet] = useState({ visible: false, data: {} })
    const [searchText, setSearchText] = useState("")
    const [searchResult, setSearchResult] = useState(data)
    const [events, setEvents] = useState(searchResult)

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
                onPress={() => setSearchText(item.title)}
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

    useEffect(() => {
        search()
    }, [searchText])

    function isEmptyObject(obj) {
        return !!Object.keys(obj).length;
    }

    useEffect(() => {
        const thisWeek = searchResult.filter(element => element.date.isBetween(moment().startOf('week'), moment().endOf('week')))
        const nextWeek = searchResult.filter(element => element.date.isBetween(moment().startOf('week').add(1, "week"), moment().endOf('week').add(1, "week")))
        const thisMonth = searchResult.filter(element => element.date.isBetween(moment().startOf('month'), moment().endOf('month')))
        const nextMonth = searchResult.filter(element => element.date.isBetween(moment().startOf('month').add(1, "month"), moment().endOf('month').add(1, "month")))

        setEvents([
            {
                title: "Nesta Semana",
                data: isEmptyObject(thisWeek) && thisWeek,
            },
            {
                title: "Na Pŕoxima Semana",
                data: isEmptyObject(nextWeek) && nextWeek,
            },
            {
                title: "Neste Mês",
                data: isEmptyObject(thisMonth) && thisMonth,
            },
            {
                title: "No Próximo Mês",
                data: isEmptyObject(nextMonth) && nextMonth,
            },
        ])
    }, [searchResult])

    return (
        <>
            <Header
                animatedRef={scrollOffsetY}
                searchbar={{
                    value: searchText,
                    onChangeText: setSearchText,
                    onSubmitEditing: () => search(),
                    onClear: () => setSearchText("")
                }}
            />
            <Container
                onScroll={
                    Animated.event(
                        [
                            { nativeEvent: { contentOffset: { y: scrollOffsetY } } },

                        ],
                        { useNativeDriver: false },
                    )
                }
                isEmpty={isEmptyObject(searchResult) === false}
            >
                <List
                    data={categories}
                    renderItem={renderCategorysItem}
                    keyExtractor={(item, index) => index}
                    horizontal
                />

                {
                    events.map((item, index) => (
                        item.data &&
                        <List
                            key={index}
                            title={item.title}
                            data={item.data}
                            renderItem={renderEventsItem}
                            keyExtractor={(item, index) => index}
                            height="big"
                            horizontal
                        />
                    ))
                }

                {
                    isEmptyObject(searchResult) === false &&
                    <View style={{ width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text>Nenhum evento encontrado!</Text>
                    </View>
                }
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