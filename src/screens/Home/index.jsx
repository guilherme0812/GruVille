import { useState } from "react"
import Header from "./Header"
import Option from "./Option"
import { BottomSheet, Card, List } from "../../components"

import { Container } from "./styles"
import Details from "./Details"

export default function Home({ navigation }) {
    const [bottomSheet, setBottomSheet] = useState({ visible: false, data: {} })
    const data = [
        {
            cover: { uri: "https://cafeviagem.com/wp-content/uploads/2019/05/vinicolas-em-Santa-Catarina-d3.jpg" },
            title: "Festival de Dança 2022",
            local: "Centreventos Cau Hansen",
            address: "Av. José Vieira, 315 - América",
            date: new Date("2022/07/19"),
            startTime: "20:00",
            endTime: "22:00"
        },
        {
            cover: { uri: "https://cafeviagem.com/wp-content/uploads/2019/05/vinicolas-em-Santa-Catarina-d3.jpg" },
            title: "Degustação de vinhos",
            local: "Vinícola D'alture",
            address: "Rodovia SC 114",
            date: new Date("2022/07/20"),
            startTime: "07:30",
            endTime: "09:00"
        }
    ]

    const categorys = [
        { id: '001', title: 'cinema', image: require('../../../assets/icons/cinema-icon.png') },
        { id: '002', title: 'música', image: require('../../../assets/icons/cinema-icon.png') },
        { id: '003', title: 'teatro', image: require('../../../assets/icons/cinema-icon.png') },
        { id: '004', title: 'tecnologia', image: require('../../../assets/icons/cinema-icon.png') },
        { id: '005', title: 'arte', image: require('../../../assets/icons/cinema-icon.png') },
    ]

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
                onPress={() => setBottomSheet({ ...bottomSheet, visible: true, data: item })}
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

    return (
        <>
            <Header />
            <Container>
                <List
                    data={categorys}
                    renderItem={renderCategorysItem}
                    keyExtractor={(item, index) => index}
                    horizontal
                />

                <List
                    title="Nesta semana"
                    data={data}
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

            <BottomSheet visible={bottomSheet.visible} onClose={() => setBottomSheet({ ...bottomSheet, visible: false })}>
                <Details data={bottomSheet.data} />
            </BottomSheet>
        </>
    )
}