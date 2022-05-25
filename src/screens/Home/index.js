import { Text } from "react-native"
import Header from "./Header"
import { Card, List } from "../../components"
import moment from "moment"

import { Container } from "./styles"
import OptionsBar from "./OptionsBar"

export default function Home({ navigation }) {
    const data = [
        {
            cover: { uri: "https://cafeviagem.com/wp-content/uploads/2019/05/vinicolas-em-Santa-Catarina-d3.jpg" },
            title: "Festival de Dança 2022",
            local: "Centreventos Cau Hansen",
            address: "Av. José Vieira, 315 - América",
            date: moment(new Date("2022/07/19")).format("YYYY-MM-DD"),
            startTime: "20:00",
            endTime: "22:00"
        },
        {
            cover: { uri: "https://cafeviagem.com/wp-content/uploads/2019/05/vinicolas-em-Santa-Catarina-d3.jpg" },
            title: "Degustação de vinhos",
            local: "Vinícola D'alture",
            address: "Rodovia SC 114",
            date: moment(new Date("2022/07/20")).format("YYYY-MM-DD"),
            startTime: "07:30",
            endTime: "09:00"
        }
    ]

    function renderItem({ item }) {
        return (
            <Card
                cover={item.cover}
                title={item.title}
                local={item.local}
                address={item.address}
                date={item.date}
                startTime={item.startTime}
                endTime={item.endTime}
            />
        )
    }

    return (
        <>
            <Header />
            <Container>
                <OptionsBar/>
                <List
                    title="Nesta semana"
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                    horizontal
                />
                <List
                    title="Na próxima semana"
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                    horizontal
                />
                <List
                    title="Mês que vem"
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                    horizontal
                />
            </Container>
        </>
    )
}