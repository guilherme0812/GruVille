import { ScrollView, TouchableOpacity, View } from "react-native"
import { Icon, Text, Button } from "../../../components"

import { Container, Header, Image, Subtitle, Title, SecondaryButton } from "./styles"

export default function Details({ cover, image, title, local, description, ...props }) {
    return (
        <Container>
            <View>
                <Image source={cover} />
                <Header>
                    <View>
                        <Title>{title}</Title>
                        <Subtitle>{local}</Subtitle>
                    </View>
                    <TouchableOpacity>
                        <Icon name="share-2" />
                    </TouchableOpacity>
                </Header>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <Text>{description}</Text>
            </ScrollView>
            <View>
                <SecondaryButton title="Saiba mais" type="secondary" />
                <Button title="Quero ir!" />
            </View>
        </Container>
    )
}