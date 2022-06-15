import { ScrollView, TouchableOpacity, View,  } from "react-native"
import { Icon, Button,Text } from "../../../components"

import { Container, Header, Image, Subtitle, Title, SecondaryButton } from "./styles"

export default function Details({ data, ...props }) {
    return (
        <Container>
            <View>
                <Image source={data.cover} />
                <Header>
                    <View>
                        <Title>{data.title}</Title>
                        <Subtitle>{data.local}</Subtitle>
                    </View>
                    <TouchableOpacity>
                        <Icon name="share-2" />
                    </TouchableOpacity>
                </Header>
            </View>
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