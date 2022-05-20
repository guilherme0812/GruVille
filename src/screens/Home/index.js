import { Text } from "react-native"
import Header from "./Header"
import { Card } from "../../components"

import { Container } from "./styles"

export default function Home({ navigation }) {
    return (
        <>
            <Header />
            <Container>
                <Text></Text>
                <Card></Card>
            </Container>
        </>
    )
}