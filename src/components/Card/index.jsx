import { View } from "react-native"
import Button from "../Button"
import Text from "../Text"
import moment from "moment"

import { Container, Content, DateContainer, DayText, Image, MonthText, SubTitle, Title, Header, OtherInfoText, Head, OtherInfoContainer, OtherInfoIcon } from "./styles"

export default function Card({ cover, date, title, local, address, startTime, endTime }) {
    return (
        <Container>
            <Header>
                <Image source={cover} />
                <DateContainer>
                    <DayText>{moment(date).format("DD")}</DayText>
                    <MonthText>{moment(date).format("MMM")}</MonthText>
                </DateContainer>
            </Header>
            <Content>
                <Head>
                    <Title>{title}</Title>
                    <SubTitle>{local}</SubTitle>
                </Head>
                <View>
                    <OtherInfoContainer>
                        <OtherInfoIcon name="map-pin" />
                        <OtherInfoText>{address}</OtherInfoText>
                    </OtherInfoContainer>
                    <OtherInfoContainer>
                        <OtherInfoIcon name="clock" />
                        <OtherInfoText>{startTime} - {endTime}</OtherInfoText>
                    </OtherInfoContainer>
                </View>
            </Content>
            <Button title="Ver mais" />
        </Container>
    )
}