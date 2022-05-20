import { View } from "react-native"
import Button from "../Button"
import Text from "../Text"
import { Container, Content, DateContainer, DayText, Image, MonthText, SubTitle, Title, Header, OtherInfoText, Head } from "./styles"

export default function Card({ cover, title, subTitle, day, month }) {
    return (
        <Container>
            <Header>
                <Image source={require("../../../assets/cardimage.jpg")} />
                <DateContainer>
                    <DayText>19</DayText>
                    <MonthText>Julho</MonthText>
                </DateContainer>
            </Header>
            <Content>
                <Head>
                    <Title>Festival de Dança 2022</Title>
                    <SubTitle>Centreventos Cau Hansen</SubTitle>
                </Head>
                <View>
                    <OtherInfoText>Av. José Vieira, 315 - América</OtherInfoText>
                    <OtherInfoText>20:00 - 22:00</OtherInfoText>
                </View>
            </Content>
            <Button title="Ver mais" />
        </Container>
    )
}