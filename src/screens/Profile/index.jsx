import { ImageBackground, Image, View } from "react-native"

import { Container, Header, ProfilePic, UserTitle, Item, ItemText, ItemIcon } from "./styles";

export default function Profile() {
    return (
        <>
            <Header>
                <ImageBackground source={{ uri: "https://cdn-statics.pmo.sc.gov.br/media/k2/items/cache/49bd8b547ef08dc22b76ace42c2e4bdb_XL.jpg" }} style={{ width: "100%", height: 200 }} />
                <ProfilePic style={{ elevation: 16 }}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" }} style={{ width: "100%", height: "100%", borderRadius: 50 }} />
                </ProfilePic>
                <UserTitle>Zézinho da Silva</UserTitle>
            </Header>
            <Container>
                <Item>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                        <ItemIcon name="heart" style={{ marginRight: 16 }} />
                        <ItemText>Lista de favoritos</ItemText>
                    </View>
                    <ItemIcon name="arrow-right" />
                </Item>
            </Container>
        </>
    )
}