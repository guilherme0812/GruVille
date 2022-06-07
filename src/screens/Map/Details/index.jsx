import { View, ScrollView } from "react-native"
import { Icon, Text, Button } from "../../../components"

import { Container, Header, Image, Subtitle, Title, OtherInfoContainer, OtherInfoIcon, OtherInfoText, SecondaryButton } from "./styles"

export default function Details({ data, ...props }) {
    return (
        <Container>
            <Header>
                <Image source={data.cover} />
                <View style={{ height: 100, justifyContent: "space-evenly" }}>
                    <View>
                        <Title>{data.title}</Title>
                        <Subtitle>{data.local}</Subtitle>
                    </View>
                    <View>
                        <OtherInfoContainer>
                            <OtherInfoIcon name="map-pin" />
                            <OtherInfoText>{data.address}</OtherInfoText>
                        </OtherInfoContainer>
                        <OtherInfoContainer>
                            <OtherInfoIcon name="clock" />
                            <OtherInfoText>{data.startTime} - {data.endTime}</OtherInfoText>
                        </OtherInfoContainer>
                    </View>
                </View>
            </Header>
            <ScrollView style={{ flex: 1 }}>
                <Text>{data.description}</Text>
            </ScrollView>
            <View>
                <SecondaryButton title="Saiba mais" type="secondary" />
                <Button title="Quero ir!" />
            </View>

        </Container>
    )
}